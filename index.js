const budgetInput = document.querySelector("#budgetInput");
const budgetButton = document.querySelector("#budgetButton");
const expenseNameInput = document.querySelector("#expenseNameInput");
const expenseAmountInput = document.querySelector("#expenseAmountInput");
const expenseButton = document.querySelector("#expenseButton");
const budgetSpan = document.querySelector("#budgetSpan");
const expenseSpan = document.querySelector("#expenseSpan");
const balanceSpan = document.querySelector("#balanceSpan");
const table = document.querySelector(".table-borderless");
const alertBox = document.querySelector("#alertBox");
const tableBody = document.querySelector("#tBody");

let budgetAmount = 0;
let expensesAmount = 0;
let balanceAmount = 0;
// EventListeners

budgetButton.addEventListener("click", appendBudget);
expenseButton.addEventListener("click", appendExpense);

// Functions
function calculate() {
  balanceAmount = budgetAmount - expensesAmount;
  console.log(balanceAmount);
  if (balanceAmount < 0) {
    balanceSpan.textContent = `-$${balanceAmount}`;
    balanceSpan.style.color = "red";
  } else if (balanceAmount == 0) {
    balanceSpan.textContent = `$${balanceAmount}`;
    balanceSpan.style.color = "black";
  } else {
    balanceSpan.textContent = `$${balanceAmount}`;
    balanceSpan.style.color = "green";
  }
}

function appendBudget() {
  if (budgetInput.value.trim() == "") {
    showAlert("You should first enter a budget value.");
  } else {
    budgetAmount = budgetInput.value;
    budgetSpan.textContent = `$${budgetAmount}`;
    budgetInput.value = "";
    calculate();
  }
}
function appendExpense() {
  if (expenseNameInput.value.trim() == "") {
    showAlert("You should first enter an expense name.");
  } else if (expenseAmountInput.value.trim() == "") {
    showAlert("You should first enter an expense value.");
  } else {
    expensesAmount += Number(expenseAmountInput.value);
    tableBody.innerHTML += ` <tr style=" font-size:1.2rem ;color:red ;font-weight:bolder">

                                <td>${expenseNameInput.value.trim()}</td>

                                <td>-$${expenseAmountInput.value.trim()}</td>
                                <td><a href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                                    <a style="color:red" href="#"><i class="fa-solid fa-trash"></i></a>
                                </td>

                            </tr>`;
  }

  expenseSpan.textContent = `$ ${expensesAmount}`;
  calculate();
  expenseAmountInput.value = "";
}
function showAlert(text) {
  alertBox.textContent = text;
  alertBox.classList.replace("hidden", "show");

  setTimeout(() => {
    alertBox.textContent = "";
    alertBox.classList.replace("show", "hidden");
  }, 2000);
}

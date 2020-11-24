//Class to create object

class Expense {
  constructor(transaction, amount){
    this.transaction = transaction;
    this.amount = amount;
  }
}

//Set variables to select elements
var calculateBtn = document.getElementById("btn-calculate");
var expenseBtn = document.getElementById("btn-expense");
var resetBtn = document.getElementById("reset");
var budgetInput = document.getElementById("budget-test");
var expense = document.getElementById("amount-input");
var expenseArray = [];
var expenseAmount = document.getElementById("expense-amount");
var expenseType = document.getElementById("expense-input");

// var budgetAmount = document.getElementById("budget-amount");

//access budget value, parse to integer, post value to budget div
function budgetAmount() {
  var parsedBudgetAmount = parseInt(budgetInput.value).toLocaleString();
  console.log(parsedBudgetAmount);
  document.getElementById("budget-amount").innerHTML =
    "$ " + parsedBudgetAmount;
  console.log(budgetInput.value);
}
calculateBtn.addEventListener("click", budgetAmount);
//add value from amount to expense container and push to empty array
//  and update onclick event

function expenseFunction() {
  expenseArray.push(expense.value); 
  expenseAmount.innerHTML = expense.value;
  console.log(expense.value);
  var parsedArray = expenseArray.map(Number);
  var reducedArray = parsedArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  document.getElementById("expense-amount").innerHTML =
    "$ " + reducedArray.toLocaleString();

  var outputBalance = budgetInput.value - reducedArray;

  document.getElementById("balance-amount").innerHTML =
    "$ " + outputBalance.toLocaleString();
}

expenseBtn.addEventListener("click", expenseFunction);

function resetFunction() {
  location.reload();
  
}

resetBtn.addEventListener("click", resetFunction);

class UI {

  static addExpenseToList(newExpense) {
    const list = document.getElementById('items');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${newExpense.transaction}</td>
    <td>${newExpense.amount}</td>
    
    `;

    list.appendChild(row);
  }
  static deleteExpense(el) {
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }
  static clearValues(){
    //budgetInput.value = "";
    expenseType.value = "";
    expense.value = "";
  }
}

expenseBtn.addEventListener("click", () => {

  // Validate
  if(expenseType.value === '' || expense.value === '' ) {
    alert('Fill in blanks');
  } else {
    // Instatiate book
   const newExpense = new Expense(expenseType.value, expense.value);

    // Add Book to UI
    UI.addExpenseToList(newExpense);

 

    // Clear fields
    UI.clearValues();
  }
});



// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var monthlyIncomeInput = document.querySelector("#monthlyIncomeInput");
var incomeDiv = document.querySelector("#divForIncome");
var savingsGoalInput = document.querySelector("#savingsGoal");
var savingsGoalDiv = document.querySelector("#divForSavingsGoal");
var fixedExpensesTable = document.querySelector("#fixedExpensesTable");
var fixedExpenseInput = document.querySelector("#fixedExpenseInput");
var fixedExpenseInputButton = document.querySelector("#fixedExpenseInputButton");
var fixedExpenseCategory = document.querySelector("#fixedExpenseCategory");
var fixedExpenseTotalDiv = document.querySelector("#fixedExpenseTotal");

// variables: CREATE userData OBJECT FOR BUDGETER'S DATA
var userData = {
    userName: "",
    income: 0,
    savingsGoal: 0,
    currentFixedTotal: 0, 
    fixedExpenses: [

    ]
}


// function: CREATE A GENERIC NEW DOM ELEMENT & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end


// function: PRESS & RELEASE THE ENTER KEY EVENT HANDLER FOR INCOME
var hitEnterForIncome = function(event) {
    var keyHit = event.key;
    if (keyHit === "Enter") {
        while (incomeDiv.hasChildNodes()) {
            incomeDiv.removeChild(incomeDiv.lastChild);   
        }
        var newP = createNew("p");
        newP.textContent = "$" + monthlyIncomeInput.value;
        incomeDiv.appendChild(newP);
        userData.income = monthlyIncomeInput.value;
        console.log(userData.income);
    } else {
        return;
    }
}
// the end


// function: PRESS & RELEASE THE ENTER KEY EVENT HANDLER FOR SAVINGS
var hitEnterForSavingsGoal = function(event) {
    var keyHit = event.key;
    if (keyHit === "Enter") {
        while (savingsGoalDiv.hasChildNodes()) {
            savingsGoalDiv.removeChild(savingsGoalDiv.lastChild);   
        }
        var newP = createNew("p");
        newP.textContent = "$" + savingsGoalInput.value;
        savingsGoalDiv.appendChild(newP);
        userData.savingsGoal = savingsGoalInput.value;
        console.log(userData.savingsGoal);
    } else {
        return;
    }
}
// the end


// function: CLICK SUBMIT EVENT HANDLER FOR A FIXED EXPENSE
var hitEnterforFixedExpense = function() {
    var newTR = createNew("tr");
    var newCategoryTD = createNew("td", "tg-yw4l");
    var newCategoryValue = fixedExpenseCategory.value;
    newCategoryTD.textContent = newCategoryValue;
    newTR.appendChild(newCategoryTD);

    var newAmountTD = createNew("td", "tg-lqy6");
    var newAmountValue = fixedExpenseInput.value;
    newAmountTD.textContent = "$" + newAmountValue;
    newTR.appendChild(newAmountTD);
    
    fixedExpensesTable.appendChild(newTR);

    var newestFixedExpenseAmount = parseInt(fixedExpenseInput.value);

    userData.currentFixedTotal += newestFixedExpenseAmount;

    var newestFixedExpense = {};
    newestFixedExpense[newCategoryValue] = newAmountValue;
    console.log(newestFixedExpense);
    userData.fixedExpenses.push(newestFixedExpense);
    
    while (fixedExpenseTotalDiv.hasChildNodes()) {
        fixedExpenseTotalDiv.removeChild(fixedExpenseTotalDiv.lastChild);   
    } 
    var fixedTotalNode = createNew("p");
    fixedTotalNode.textContent = "$" + userData.currentFixedTotal;
    fixedExpenseTotalDiv.appendChild(fixedTotalNode);
}
// the end


// logic: ADD EVENT LISTENERS
monthlyIncomeInput.addEventListener("keyup", hitEnterForIncome);
savingsGoalInput.addEventListener("keyup", hitEnterForSavingsGoal);
fixedExpenseInputButton.addEventListener("click", hitEnterforFixedExpense);

// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var monthlyIncomeInput = document.querySelector("#monthlyIncomeInput");
var incomeDiv = document.querySelector("#divForIncome");
var savingsGoalInput = document.querySelector("#savingsGoal");
var savingsGoalDiv = document.querySelector("#divForSavingsGoal");
var fixedExpensesTable = document.querySelector("#fixedExpensesTable");
var fixedExpenseInput = document.querySelector("#fixedExpenseInput");
var fixedExpenseInputButton = document.querySelector("#fixedExpenseInputButton");
var fixedExpenseCategory = document.querySelector("#fixedExpenseCategory");
var fixedExpenseTotal = document.querySelector("#fixedExpenseTotal");

var currentFixedTotal = 0;

// variables: CREATE userData OBJECT FOR BUDGETER'S DATA
var userData = {
    userName: "",
    income: 0,
    savingsGoal: 0,
    fixedExpenses: {

    }
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
        newP.textContent = " $" + monthlyIncomeInput.value;
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
        newP.textContent = " $" + savingsGoalInput.value;
        savingsGoalDiv.appendChild(newP);
        userData.savingsGoal = savingsGoalInput.value;
        console.log(userData.savingsGoal);
    } else {
        return;
    }
}
// the end


// function: CLICK SUBMIT EVENT HANDLER FOR A FIXED EXPENSE
var hitEnterforFixedExpense = function(event) {
    var newTR = createNew("tr", "newExpense");
    
    var newCategoryTD = createNew("td", "tg-yw4l");
    newCategoryTD.textContent = fixedExpenseCategory.value;
    newTR.appendChild(newCategoryTD);

    var newAmountTD = createNew("td", "tg-lqy6");
    newAmountTD.textContent = " $" + fixedExpenseInput.value;
    newTR.appendChild(newAmountTD);
    
    fixedExpensesTable.appendChild(newTR);

    var newestExpense = parseInt(fixedExpenseInput.value);

    currentFixedTotal += newestExpense;

    var fixedTotalNode = createNew("span");
    fixedTotalNode.textContent = currentFixedTotal;
    fixedExpenseTotal.appendChild(fixedTotalNode);

    console.log(currentFixedTotal);
}
// the end


// logic: ADD EVENT LISTENERS
monthlyIncomeInput.addEventListener("keyup", hitEnterForIncome);
savingsGoalInput.addEventListener("keyup", hitEnterForSavingsGoal);
fixedExpenseInputButton.addEventListener("click", hitEnterforFixedExpense);

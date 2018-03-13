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

var todaysSpendingTable = document.querySelector("#todaysSpendingTable");
var todaysSpendingInput = document.querySelector("#todaysSpendingInput");
var todaysSpendingInputButton = document.querySelector("#todaysSpendingInputButton");
var todaysSpendingCategory = document.querySelector("#todaysSpendingCategory");
var todaysSpendingTotalDiv = document.querySelector("#dailyTotal");



// variables: CREATE userData OBJECT FOR BUDGETER'S DATA
var userData = {
    userName: "",
    income: 0,
    savingsGoal: 0,
    currentFixedTotal: 0, 
    currentDailySpendingTotal: 0,
    fixedExpenses: [

    ],
    todaysSpending: [

    ]
}


// function: CREATE A GENERIC NEW NODE & GIVE IT A CLASS & ATTRIBUTES
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


// function: CLICK SUBMIT EVENT HANDLER FOR A PURCHASE
var hitEnterforAPurchase = function() {
    var newTR = createNew("tr");
    var newCategoryTD = createNew("td", "tg-yw4l");
    var newCategoryValue = todaysSpendingCategory.value;
    newCategoryTD.textContent = newCategoryValue;
    newTR.appendChild(newCategoryTD);
    var newAmountTD = createNew("td", "tg-lqy6");
    var newAmountValue = todaysSpendingInput.value;
    newAmountTD.textContent = "$" + newAmountValue;
    newTR.appendChild(newAmountTD);
    
    todaysSpendingTable.appendChild(newTR);

    var newestPurchaseAmount = parseInt(todaysSpendingInput.value);

    userData.currentDailySpendingTotal += newestPurchaseAmount;

    var newestPurchase = {};
    newestPurchase[newCategoryValue] = newAmountValue;
    console.log(newestPurchase);
    userData.todaysSpending.push(newestPurchase);
    
    while (todaysSpendingTotalDiv.hasChildNodes()) {
        todaysSpendingTotalDiv.removeChild(todaysSpendingTotalDiv.lastChild);   
    } 
    var spendingTotalNode = createNew("p");
    spendingTotalNode.textContent = "$" + userData.currentDailySpendingTotal;
    todaysSpendingTotalDiv.appendChild(spendingTotalNode);
}
// the end



// logic: ADD EVENT LISTENERS
monthlyIncomeInput.addEventListener("keyup", hitEnterForIncome);
savingsGoalInput.addEventListener("keyup", hitEnterForSavingsGoal);
fixedExpenseInputButton.addEventListener("click", hitEnterforFixedExpense);
todaysSpendingInputButton.addEventListener("click", hitEnterforAPurchase);



//Donut Chart
let myChart = document.getElementById("myChart").getContext("2d");

let massPopChart = new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: ["Daily Spending Limit", "Amount Spent"],
        datasets: [{
            data: [
                160,
                60
            ],
            backgroundColor: [
                "blue",
                "white"
            ],
            borderWidth: 4,
            borderColor: "white",
            hoverBorderWidth: "black",
            hoverBorderColor: "gray"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Daily Savings Tracker",
            fontSize: 25
        },
    legend: {
        position: "bottom"
    },
    layout: {
        padding: {
            top: 10
        }
    }
    }
});
$(".dateAPI").text(moment().format("LL"));


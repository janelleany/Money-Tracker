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
var todaysSpendingLimit = document.querySelector("#spendingLimit");

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

    ],
    playWithMoney: 0,
    dailyLimit: 1,
}


// function: CREATE A GENERIC NEW NODE & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end



// function: CREATE CALCULATION FOR DAILY SPENDING LIMIT
var calcDailyLimit = function() {
    var daysInMonth = moment().daysInMonth();
    userData.playWithMoney = userData.income - userData.currentFixedTotal - userData.savingsGoal;
    var limit = userData.playWithMoney / daysInMonth;
    userData.dailyLimit = limit;
    while (todaysSpendingLimit.hasChildNodes()) {
        todaysSpendingLimit.removeChild(todaysSpendingLimit.lastChild);   
    }
    var newP = createNew("p");
    newP.textContent = "$" + Math.floor(userData.dailyLimit);
    todaysSpendingLimit.appendChild(newP);
    return limit;
};

//Donut 
var renderDonut = function(data1, data2) {
    let myChart = document.getElementById("myChart").getContext("2d");
    var chartLimit = Math.floor(userData.dailyLimit) - Math.floor(userData.currentDailySpendingTotal);
    var chartSpent = Math.floor(userData.currentDailySpendingTotal);
    let massPopChart = new Chart(myChart, {
        type: "doughnut",
            data: {
            labels: ["Daily Spending Limit", "Amount Spent"],
            datasets: [{
                data: [
                    chartLimit,
                    chartSpent,
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
}


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
        calcDailyLimit();
        renderDonut();
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
        calcDailyLimit();
        renderDonut();
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
    calcDailyLimit();
    renderDonut();
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
    renderDonut();
    // midnightTask();
}
// the end



// logic: ADD EVENT LISTENERS
monthlyIncomeInput.addEventListener("keyup", hitEnterForIncome);
savingsGoalInput.addEventListener("keyup", hitEnterForSavingsGoal);
fixedExpenseInputButton.addEventListener("click", hitEnterforFixedExpense);
todaysSpendingInputButton.addEventListener("click", hitEnterforAPurchase);

// Display Date on the Screen
$(".dateAPI").text(moment().format("LL"));


// Reset Daily Spending at Midnight
var midNightTask = function () {
    var now = moment();
    var midnight = moment().endOf("day");
    if (now === midnight) {
        userData.currentDailySpendingTotal = 0;
        $("#todaysSpendingTable tr>td").remove();   
    }
};

  
// Display graph without information
renderDonut();
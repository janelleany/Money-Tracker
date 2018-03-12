// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var monthlyIncomeInput = document.querySelector("#monthlyIncomeInput");
var incomeDiv = document.querySelector("#divForIncome");
var savingsGoalInput = document.querySelector("#savingsGoal");
var savingsGoalDiv = document.querySelector("#divForSavingsGoal");

// variables: CREATE userData OBJECT FOR BUDGETER'S DATA
var userData = {
    userName: "",
    income: 0,
    savingsGoal: 0
};


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
};

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
};

monthlyIncomeInput.addEventListener("keyup", hitEnterForIncome);
savingsGoalInput.addEventListener("keyup", hitEnterForSavingsGoal);


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


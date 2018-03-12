// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var monthlyIncome = document.querySelector("#monthlyIncome");
var incomeContainer = document.querySelector(".goalsAndExpenses");
var incomeDiv = document.querySelector("#divForIncome");


// variables: CREATE userData OBJECT FOR USER DATA
var userData = {
    userName: "",
    income: 0
};


// function: CREATE A GENERIC NEW DOM ELEMENT & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end


// function: PRESS ENTER EVENT HANDLER
var hitEnter = function(event) {
    var keyHit = event.key;
    if (keyHit === "Enter") {
        while (incomeDiv.hasChildNodes()) {
            incomeDiv.removeChild(incomeDiv.lastChild);   
        }
        var newSpan = createNew("span");
        newSpan.textContent = " $" + monthlyIncome.value;
        incomeDiv.appendChild(newSpan);
    } else {
        return;
    }
};


incomeContainer.addEventListener("keyup", hitEnter);

// Chart
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
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


console.log(userData);
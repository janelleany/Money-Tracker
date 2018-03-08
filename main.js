// variables: QUERY & NAME THE DOM ELEMENTS WE NEED TO WORK WITH
var monthlyIncome = document.querySelector("[name='income']");
var incomeContainer = document.querySelector(".goalsAndExpenses");

// function: CREATE A NEW DOM ELEMENT & GIVE IT A CLASS & ATTRIBUTES
var createNew = function(tagName, className, attribute, attributeValue) {
    var newElement = document.createElement(tagName);
    newElement.classList.add(className);
    newElement.setAttribute(attribute, attributeValue);
    return newElement;
}
// the end


// create newUL DOM element for newestOrder.
var newUL = createNew("ul", "orderUL", "style", "list-style-type: square;");
newUL.addEventListener("click", function() {
    orderContainer.removeChild(newUL);
});

// loop through values in newestOrder object and forEach: create newLI DOM element via _f_createNew, set text to the newestOrder value/currentOrderElement, & append to newUL
Object.values(newestOrder).forEach(function(currentOrderElement) {
    var newLI = createNew("li", "orderLI");
    newLI.textContent = currentOrderElement;
    newUL.appendChild(newLI);
});

// append newUL DOM element to parent div DOM element.
orderContainer.appendChild(newUL);

// push newestOrder object to orders array
orders.push(newestOrder);
console.log(orders);

};
// the end
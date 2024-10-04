const display = document.querySelector(".display");
let currentNum = "";
let prevNum = 0;
let operator = "";
let result = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) return "ERROR";
    return num1/num2;
}

function modulus(num1, num2) {
    return num1%num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        default:
            return null;
    }
}

function addToDisplay(character){ 
    display.value += character;
    currentNum += character;
}

function clearDisplay() {
    display.value = "";
    currentNum = "";
    prevNum = 0;
    operator = "";
}

// Function to handle when an operator is pressed
function setOperator(op) {
    if (currentNum !== "") {
        prevNum = parseFloat(currentNum);
        operator = op; 
        currentNum = "";
        display.value += ` ${op} `;
    }
}

// Function to calculate the result
function calculate() {
    if (operator && currentNum !== "") {
        let secondNumber = parseFloat(currentNum);
        result = operate(operator, prevNum, secondNumber);
        display.value = result;
        currentNum = result.toString(); 
        operator = ""; 
    }
}
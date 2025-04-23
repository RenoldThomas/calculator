// DOM reference to the calculator display
const display = document.querySelector(".display");

// State variables to track calculator operations
let currentNum = "";     // Current number being entered
let prevNum = 0;         // Previous number (first operand)
let operator = "";       // Current operator (+, -, *, /, %)
let result = 0;          // Result of calculation

/**
 * Basic arithmetic functions
 * Each function takes two numbers and returns the result of the operation
 */

// Addition function
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction function
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}

// Division function with error handling for division by zero
function divide(num1, num2) {
    if (num2 === 0) return "ERROR";
    return num1 / num2;
}

// Modulus function (remainder after division)
function modulus(num1, num2) {
    return num1 % num2;
}

/**
 * Main operation function that calls the appropriate arithmetic function
 * based on the operator provided
 * @param {string} operator - The arithmetic operator (+, -, *, /, %)
 * @param {number} num1 - The first operand
 * @param {number} num2 - The second operand
 * @returns {number|string} - The result of the operation or an error message
 */
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

/**
 * Adds a character (digit or decimal point) to the display and current number
 * @param {string} character - The character to add (0-9 or .)
 */
function addToDisplay(character){ 
    display.value += character;
    currentNum += character;
}

/**
 * Clears the display and resets all state variables
 */
function clearDisplay() {
    display.value = "";
    currentNum = "";
    prevNum = 0;
    operator = "";
}

/**
 * Handles when an operator button is pressed
 * Stores the current number as the first operand,
 * sets the operator, and prepares for the second operand
 * @param {string} op - The operator selected (+, -, *, /, %)
 */
function setOperator(op) {
    if (currentNum !== "") {
        prevNum = parseFloat(currentNum);
        operator = op; 
        currentNum = "";
        display.value += ` ${op} `;
    }
}

/**
 * Calculates the result when the equals button is pressed
 * Takes the stored first operand, operator, and current number as second operand
 * Computes the result and updates the display
 */
function calculate() {
    if (operator && currentNum !== "") {
        let secondNumber = parseFloat(currentNum);
        result = operate(operator, prevNum, secondNumber);
        display.value = result;
        currentNum = result.toString(); 
        operator = ""; 
    }
}
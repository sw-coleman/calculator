//Global variables to assign buttons 
const digitBtns = document.querySelectorAll("digit-button");
const operatorBtns = document.querySelectorAll("operator-button");
const clearBtn = document.getElementById("clear");
const posNegBtn = document.getElementById("pos-neg");
const decimalBtn = document.getElementById("decimal");
const equalsBtn = document.getElementById("equals");
const display = document.getElementById("display");

let currentNum = 0;

//Functions to update and clear display
function updateDisplay(input) { 
    display.textContent = input;
    }
function clearDisplay() {
    display.textContent = 0;
}

//Adding function to button presses.
clearBtn.addEventListener("click", clearDisplay);

//Arithmatic functions
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    if (y!=0){
        return x / y;
    } else {
        updateDisplay('ERROR'); //Cannot divide a number by 0.
    }
}

//Function to execute arithmatic operation
function operate(operator,x,y){
    switch(operator){
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case '*':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
    }
}


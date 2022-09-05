//Global variables to assign buttons 
const digitBtns = document.querySelectorAll(".digit-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const clearBtn = document.getElementById("clear");
const posNegBtn = document.getElementById("pos-neg");
const equalsBtn = document.getElementById("equals");
const displayMain = document.getElementById("display-main");
const displaySec = document.getElementById("display-sec");

let currentNum = '';
let previousNum = '';
let result = null;
let operation = '';
let hasDecimal = false;

//Add event listener to each digit button, and change display to show value of button
digitBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.textContent === '.' && !hasDecimal){ //Only allow the user to add 1 decimal point to each number
            hasDecimal = true;
        } else if (e.target.textContent === '.' && hasDecimal){
            return;
        }
        const value = e.target.dataset.value;
        displayMain.textContent += value;
        currentNum = displayMain.textContent;
    });
});
//Add event listener to each operator button
operatorBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(!currentNum) result;
        hasDecimal = false;
        const operationName = e.target.textContent;
        if(previousNum && currentNum && operation){
            operate();
        } else {
            result = parseFloat(currentNum);
        }
        console.log(result);
        clearNum(operationName);
    });
});

//Function to clear current var and store in secondary var
function clearNum(name = '') {
    previousNum += currentNum + '' + name + ' ';
    displaySec.textContent = previousNum;
    hasDecimal = false;
    displayMain.textContent = '';
}

//Arithmatic functions
function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){z
    return x * y;
}
function divide(x,y){
    if (y!=0){
        return x / y;
    } else {
        display.textContent = "ERROR"; //Cannot divide a number by 0.
    }
}



//Function to clear display 
function clearDisplay() {
    currentNum = '';
    previousNum = '';
    displayMain.textContent = '';
    displaySec.textContent = '';
    result = '';
}

clearBtn.addEventListener("click", clearDisplay);

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
//Global variables to assign buttons 
const digitBtns = document.querySelectorAll(".digit-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const displayMain = document.getElementById("display-main");
const displaySec = document.getElementById("display-sec");

let currentNum = '';
let previousNum = '';
let result = null;
let operation = '';
let inverseNumber = '';
let hasDecimal = false;
let alreadyCalc = false;
//Add event listener to each digit button, and change display to show value of button
digitBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        limitUserInput();
        if (limitUserInput() === true){
            return;
        }
        if(e.target.textContent === '.' && !hasDecimal){ //Only allow the user to add 1 decimal point to each number
            hasDecimal = true;
        } else if (e.target.textContent === '.' && hasDecimal){
            return;
        }
        if (alreadyCalc === true){ //If calculation has already been complete, new input will overwrite previous reuslt.
            clearDisplay();
        }
        const value = e.target.dataset.value;
        displayMain.textContent += value;
        currentNum = displayMain.textContent;
    });
});
//Add event listener to each operator button
operatorBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(!currentNum) return;
        hasDecimal = false;
        const operationName = e.target.textContent;
        if(previousNum && currentNum && operation){
            operate();
        } else {
            result = parseFloat(currentNum);
        }
        clearNum(operationName);
        operation = operationName;
        alreadyCalc = false;
    });
});
//Functionality for equals button.
equalsBtn.addEventListener("click", (e)=> {
    if(!currentNum || !result) return;
    if(alreadyCalc === true) return;
    hasDecimal = false;
    operate();
    clearNum();
    if (result.toString().length < 10) {
        displayMain.textContent = result;
    } else {
        displayMain.textContent = result.toPrecision(5);
    }
    displaySec.textContent = '';
    currentNum = result;
    previousNum = '';
    alreadyCalc = true;
});
//Function to clear current var and store in secondary var
function clearNum(name = '') {
    displaySec.textContent = currentNum + '' + name + ' ';
    previousNum = result;
    hasDecimal = false;
    displayMain.textContent = ''
    currentNum = '';
}
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
        return "ERROR"; //Cannot divide a number by 0.
    }
}
function modulus(x,y){
    return x % y;
}
function power(x,y){
    return x ** y;
}
//Function to clear display 
function clearDisplay() {
    currentNum = '';
    previousNum = '';
    result = '';
    displayMain.textContent = '';
    displaySec.textContent = '';
    alreadyCalc = false;
}
clearBtn.addEventListener("click", clearDisplay);
//Function to execute arithmatic operation
function operate(){
    if (operation === 'x'){
        result = multiply(parseFloat(result), parseFloat(currentNum));
    } else if (operation === '+'){
        result = add(parseFloat(result), parseFloat(currentNum));
    } else if (operation === '-'){
        result = subtract(parseFloat(result), parseFloat(currentNum));
    } else if (operation === '÷'){
        result = divide(parseFloat(result), parseFloat(currentNum));
    } else if (operation === '%'){
        result = modulus(parseFloat(result), parseFloat(currentNum));
    } else if (operation === '^'){
        result = power(parseFloat(result), parseFloat(currentNum));
    }
}
//Function to limit user input to 10 digits.
function limitUserInput(){
        if (currentNum.toString().length > 10){
            return true;
        } else {
            return false;
        }
};
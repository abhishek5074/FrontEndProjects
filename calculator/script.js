const elements = document.getElementsByClassName("cal-buttons")

const operators = document.getElementsByClassName("cal-ops");

let inputNumber = "";
let operand1 = "", operand2 = "";
let operator = "";

// numbers
const input = document.getElementById("number-input");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        inputNumber = inputNumber + elements[i].textContent;
        input.value = inputNumber;
        console.log(inputNumber);
    })
}

// operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        operator = operators[i].textContent;
        operand1 = inputNumber;
        console.log(operator + " " + operand1);
        input.value = "";
        inputNumber = "";
    })
}

// clear 
document.getElementById("clear-btn").addEventListener('click', handleClear);

function handleClear() {
    input.value = "";
    inputNumber = "";
    console.log("clear");
}

//total
document.getElementById("total-btn").addEventListener('click', handleCalculate);

function handleCalculate() {
    operand2 = inputNumber;
    let res = "";
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);
    switch (operator) {
        case '+': res = operand1 + operand2;
            break;
        case '-': res = operand1 - operand2;
            break;
        case '*': res = operand1 * operand2;
            break;
        case '/': if (operand2 === 0)
            res = "Not divisible by Zero";
        else
            res = operand1 / operand2;
            break;
    }
    input.value = res;
    inputNumber = "";
}


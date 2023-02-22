let num1 = 8;
let num2 = 2;
let result = document.getElementById('sum-el');
document.getElementById('num1-el').textContent = num1;
document.getElementById('num2-el').textContent = num2;

function add() {
    result.textContent = num1 + num2;
}

function substract() {
    result.textContent = num1 - num2;
}

function divide() {
    result.textContent = num1 / num2;
}

function multiply() {
    result.textContent = num1 * num2;
}
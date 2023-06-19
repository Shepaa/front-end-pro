const action = getAction();
const operandA = getOperand('A');
const operandB = getOperand('B');

const res = calc(action, operandA, operandB);

showResult(action, operandA, operandB, res);

function isValid (operand) {
    return isNaN(operand);
}

function getOperand(operandName) {
    return Number(prompt(`Enter operand ${operandName}`));
}

function getAction() {
    return prompt('Enter action +, -, *, / ');
}
function calc(action, a, b) {
    let res;
    switch (action) {
        case "+":
            res = a + b;
            break
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/" :
            res = a / b;
            break;
        default :
            alert("Wrong action");
    }
    return res;
}

function showResult(action, a, b, result) {
    if (!isValid(result)) {

        alert(`${a} ${action} ${b} = ${result}`);
    } else {
        alert("wrong operand");
    }
}


const admissibleActions = ['+', '-', '*', '/']
const action = getAction();
const operandA = getOperand('A');
const operandB = getOperand('B');
if (!isValidAction(action)) {
    alert("wrong action");
} else if (isOperandValid(operandA) || isOperandValid(operandB)) {
    alert("wrong operand");
}
const res = calc(action, operandA, operandB);
showResult(action, operandA, operandB, res);

function isValidAction(action) {
    return admissibleActions.includes(action)
}

function isOperandValid(operand) {
    return isNaN(operand)
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
    }
    return res;
}

function showResult(action, a, b, result) {
    alert(result);

}


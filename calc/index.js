const action = getAction();
const operandA = getOperand('A');
const operandB = getOperand('B');
const res = calc(action, operandA, operandB);
showResult(action, operandA, operandB, res);

function isValid(operand) {
    return isNaN(operand);
}

function getOperand(operandName) {
    let userOperand = Number(prompt(`Enter operand ${operandName}`));
    if (!isValid(userOperand)) {
        return userOperand
    } else if (isValid(operandName)) {
        return Number(prompt("uncorrected value, try again"))
    }
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
    if (!isNaN(result, a , b)) {
        alert(`${a} ${action} ${b} = ${result}`);
    }else if (isNaN(a,b)) {
        alert("wrong operand")
    }
}


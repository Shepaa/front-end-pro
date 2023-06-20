const admissibleActions = ['+', '-', '*', '/']
const action = getAction();
const operandA = getOperand('A');
const operandB = getOperand('B');
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

    if (!isValidAction(action)) {
        alert("wrong action");
    } else if (isOperandValid(operandA) || isOperandValid(operandB)) {
        alert("wrong operand");
    } else {
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
    }
    return res;
}

function showResult(action, a, b, result) {
    // if (!isNaN(result, a , b)) {
    //     alert(`${a} ${action} ${b} = ${result}`);
    // }else if (isNaN(a,b)) {
    //     alert("wrong operand")
    // }
    if (!isNaN(result)) {
        alert(result);
    }
}


function simpleCalc() {
    //INPUT - user inputs two numbers and selects an operator, and then submits their own answer
    let message, trueAnswer;
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let operator = document.getElementById('operator').value;
    let answer = parseInt(document.getElementById('answer').value);
    //PROCESSING - add, subtract, multiply or divide depending on the operator and validate user's answer
    switch(operator) {
        case "+":
            trueAnswer = num1 + num2;
            break;
        case "-":
            trueAnswer = num1 - num2;
            break;
        case "*":
            trueAnswer = num1 * num2;
            break;
        case "/":
            trueAnswer = num1 / num2;
            break;
    }
    if (trueAnswer == answer) {
        message = "Correct! 🏆"
    } else {
        message = "Incorrect 😢"
    }
    //OUTPUT - display correct or incorrect
    document.getElementById('output').innerHTML = `${message}`;
}
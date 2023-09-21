function numberOperations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let sum = 0;
    let isOddOrEven;

    if (operator == '+') {
        sum = n1 + n2;
    } else if (operator == '-') {
        sum = n1 - n2;
    } else if (operator == '*') {
        sum = n1 * n2;
    } else if (operator == '/') {
        sum = n1 / n2;
    } else if (operator == '%') {
        sum = n1 % n2
    }

    switch (operator) {

        case '+':
        case '-':
        case '*':

            if (sum % 2 == 0) {
                isOddOrEven = 'even';

            } else {
                isOddOrEven = 'odd';
            }

            console.log(`${n1} ${operator} ${n2} = ${sum} - ${isOddOrEven}`);
            break;

        case '/':
            if (n1 == 0) {
                console.log(`Cannot divide ${n2} by zero`);

            } else if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(sum).toFixed(2)}`);
            }

            break;

        case '%':
            if (n1 == 0) {
                console.log(`Cannot divide ${n2} by zero`);

            } else if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${sum}`);

            }
            break;
            
        default:
            break;
    }
}

numberOperations(["10", "12", "+"]);
numberOperations(["123", "12", "/"]);
numberOperations(["112", "0", "/"]);
numberOperations(["10", "1", "-"]);
numberOperations(["10", "3", "%"]);
numberOperations(["10", "0", "%"]);
numberOperations(["7", "3", "*"]);
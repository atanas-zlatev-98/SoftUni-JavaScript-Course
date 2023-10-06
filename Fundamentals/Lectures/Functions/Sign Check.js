function signCheck(num1, num2, num3) {

    let isPositive = 0;
    let isNegative = 0;

    num1 >= 0 ? isPositive++ : isNegative++;
    num2 >= 0 ? isPositive++ : isNegative++;
    num3 >= 0 ? isPositive++ : isNegative++;

     if (isNegative === 0 || isNegative === 2) {
        console.log("Positive");
    } else if (isNegative === 1 || isNegative === 3) {
        console.log("Negative");
    } 
}

signCheck(-6,-12,14);
signCheck(-1, -2, -3);
signCheck(-5,1,1);
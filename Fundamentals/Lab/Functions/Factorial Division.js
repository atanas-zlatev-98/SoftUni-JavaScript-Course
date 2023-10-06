function factorial(num1,num2){

    let factorialNumOne = calcFactoriel(num1);
    let factorialNumTwo = calcFactoriel(num2);

    let result = factorialNumOne / factorialNumTwo;

    console.log(result.toFixed(2));

    function calcFactoriel(num){
        let factorial = 1;
        while(num > 1){
            factorial *= num;
            num--;
        }
        return factorial;
    }
    
}

factorial(5,2);
factorial(6, 2);
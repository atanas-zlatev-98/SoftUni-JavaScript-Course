function perfectNumbers(number){

    let sumProperDivisors =0;

    for(let divisor = 1; divisor < number;divisor++){
        if(number % divisor == 0){
            sumProperDivisors += divisor;
        }
    }

    if(sumProperDivisors == number){
        console.log('We have a perfect number!')
    }else {
        console.log(`It's not so perfect.`);
    }

}

perfectNumbers(6);
perfectNumbers(28);
perfectNumbers(123649);
function negativePositiveNumbers(arr){

    let result = [];

    for(let number of arr){

        if(number < 0 ){
            result.unshift(number)
        }else {
            result.push(number);
        }
    }

    for(let numbers of result){
        console.log(numbers);
    }

}

negativePositiveNumbers([7, -2, 8, 9])
//negativePositiveNumbers([3, -2, 0, -1]);
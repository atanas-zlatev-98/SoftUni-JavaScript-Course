function sumNumbers(input){
    let num = String(input[0]);
    let sum = 0;
    for(let i = 0; i < num.length;i++){
        let numbers = Number(num[i]);
        sum += numbers;
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumNumbers([1234]);
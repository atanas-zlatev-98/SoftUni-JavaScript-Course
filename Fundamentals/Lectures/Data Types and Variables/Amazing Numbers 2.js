function amazingNumbersTwo(number){
    let numAsString = String(number);

    let num = 0;

    for(let i = 0; i< numAsString.length;i++){
        num += Number(numAsString[i]);
    }

    let result = num.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbersTwo(1233);
amazingNumbersTwo(999);
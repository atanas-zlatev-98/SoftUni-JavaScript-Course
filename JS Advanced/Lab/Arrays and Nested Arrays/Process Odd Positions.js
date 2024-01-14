function processOddPositions(arr){

    let oddPositions = [];

    for(let i = 0;i < arr.length;i++){

        if(i % 2 !== 0 ){
            oddPositions.push(arr[i]);
        }
    }

    let result = oddPositions.map((number) => number * 2).reverse();

    return result

}

processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3]);
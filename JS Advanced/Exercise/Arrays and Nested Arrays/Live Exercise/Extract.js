function extract(arr){

    let result = [];
    let biggestOne = arr.shift();

    result.push(biggestOne);

    arr.forEach(x => {
        if(biggestOne < x){
            biggestOne = x;
            result.push(biggestOne);
        }
    })

    return result;
    
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([1, 2, 3, 4]);
extract([20,3,2,15,6,1]);

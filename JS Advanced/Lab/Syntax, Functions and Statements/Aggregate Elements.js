function aggregateElements(arr){


    let sumElements = sumAllElements(arr);
    console.log(sumElements);

    let sumInverseVal = sumInverse(arr);
    console.log(sumInverseVal);

    let sumConcat = concatStr(arr);
    console.log(sumConcat);

    function concatStr(arrConcat){
        return arrConcat.map(String).reduce((acc,curr)=> acc+curr);
    }
    function sumInverse(arrSum){
        return arrSum.map((number) => 1/number).reduce((acc,curr) => acc + curr);
    }

    function sumAllElements(arrSum){
        return arrSum.reduce((acc,curr) => acc + curr);
    }

}

aggregateElements([1,2,3]);

aggregateElements([2, 4, 8, 16]);
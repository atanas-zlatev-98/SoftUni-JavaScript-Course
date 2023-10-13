function sorting(arr){

    let sortedArr = arr.sort((a,b)=> a- b);
    let finalArr = [];

    while(sortedArr.length > 0 ){
        let lastElement = sortedArr.pop();
        let firstElement = sortedArr.shift();

        finalArr.push(lastElement);
        finalArr.push(firstElement);
    }

    console.log(finalArr.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
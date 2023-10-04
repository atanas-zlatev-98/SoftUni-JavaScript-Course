function nonDecreasing(arr) {

    let biggestNumber = arr[0]
  
    const result = arr.filter(event => {
        if(event >= biggestNumber){
            biggestNumber = event
        }
           return event >= biggestNumber;
        
    });
    console.log(result.join(' '));

}

nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);

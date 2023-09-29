function max(arr){
    let newArr =[]

    for(let i = 0 ;i< arr.length;i++){
        let currentNumber = arr[i];
        let isTop = true;

        for(let j = i+1; j< arr.length;j++){
            let nextNum = arr[j];

            if(nextNum >= currentNumber){
                isTop = false;
                break;
            }
        }

        if(isTop){
            newArr.push(currentNumber);
        }
    }

    console.log(newArr.join(' '));

}
max([27, 19, 42, 2, 13, 45, 48])
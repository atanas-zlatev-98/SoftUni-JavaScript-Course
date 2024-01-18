function calories(arr){

    let result = {};

    for(let i = 0;i < arr.length;i+=2){
        let product = arr[i];
        let quantity = arr[i+1];

        result[product] = Number(quantity);
    }
    
    return result;
}

console.log(calories(['Yoghurt', '48', 'Rise', '138','Apple', '52']));
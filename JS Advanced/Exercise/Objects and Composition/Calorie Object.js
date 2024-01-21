function calorieObject(arr){

    let result = {};

    for(let i = 0; i < arr.length;i+=2){
        let product = arr[i];
        let calories = arr[i+1];

        result[product] = Number(calories);

    }
    console.log(result)
}


calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52'])
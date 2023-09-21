function shop(input){

    let dogFoodPackage = Number(input[0]);
    let catFoodPackage = Number(input[1]);

    let finalPrice = ((dogFoodPackage * 2.50) + (catFoodPackage * 4));

    console.log(`${finalPrice} lv.`);
}
function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let deliveryPrice = 2.50;

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegMenuPrice = vegMenu * 8.15;

    let totalPriceOfMenus = chickenMenuPrice + fishMenuPrice + vegMenuPrice;
    let dessertPrice = totalPriceOfMenus * 0.20;

    let totalSum = totalPriceOfMenus + dessertPrice + deliveryPrice;

    console.log(totalSum);
}
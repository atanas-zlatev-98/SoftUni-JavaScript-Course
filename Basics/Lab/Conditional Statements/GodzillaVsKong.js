function KongVsGodzilla(input){
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let priceOfClothes = people * clothesPrice;
    let decor = budget * 0.10;


    if(people > 150) {
        priceOfClothes = priceOfClothes *= 0.90;
    }

    let moneyNeeded = priceOfClothes + decor;

    if(budget >= moneyNeeded) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - moneyNeeded).toFixed(2)} leva left.`);
    }else{
        console.log('Not enough money!');
        console.log(`Wingard needs ${(moneyNeeded - budget).toFixed(2)} leva more.`)
    }
}
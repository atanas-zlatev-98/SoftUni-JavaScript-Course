function shopping(input) {

    let budget = Number(input[0]);
    let videoCardsQuantity = Number(input[1]);
    let processorsQuantity = Number(input[2]);
    let ramMemoryQuantity = Number(input[3]);

    let videoCardsPrice = videoCardsQuantity * 250;
    let processorsPrice = processorsQuantity * (videoCardsPrice * 0.35);
    let ramMemoryPrice = ramMemoryQuantity * (videoCardsPrice * 0.10);

    let totalPrice = videoCardsPrice + processorsPrice + ramMemoryPrice;

    if(videoCardsQuantity > processorsQuantity) {
        totalPrice = totalPrice * 0.85;
    }

    if(totalPrice <= budget){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }

}
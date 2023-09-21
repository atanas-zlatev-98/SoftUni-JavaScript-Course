function toyShop(input) {
    let trip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let totalPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    let toysCount = puzzles + dolls + bears + minions + trucks;

    if(toysCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    let rent = totalPrice * 0.10;

    let profit = totalPrice - rent;

    if(profit >= trip) {
       console.log(`Yes! ${(profit - trip).toFixed(2)} lv left.`)
    }else {
        console.log(`Not enough money! ${(trip - profit).toFixed(2)} lv needed.`)
    }
}
function cleverLily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;


    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += 10;
            stolenMoney++;
        }else {
            toysCounter++;
        }
    }

    console.log(savedMoney);
    let totalMoneyFromToys = toysCounter * pricePerToy;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;
    
    console.log(totalSavedMoney);
    if(totalSavedMoney >= washerPrice){
        console.log(`Yes! ${(totalSavedMoney - washerPrice).toFixed(2)}`)
    }else {
        console.log(`No! ${(washerPrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);
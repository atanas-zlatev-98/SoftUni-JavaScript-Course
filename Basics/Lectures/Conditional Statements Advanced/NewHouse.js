function newHouse(input) {
    let flower = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;

    switch (flower) {
        case 'Roses':
            flowerPrice = flowersCount * 5;
            if (flowersCount > 80) {
                flowerPrice = flowerPrice - (flowerPrice * 0.10);
            }
            break;
        case 'Dahlias':
            flowerPrice = flowersCount * 3.80;
            if (flowersCount > 90) {
                flowerPrice = flowerPrice - (flowerPrice * 0.15);
            }
            break;
        case 'Tulips':
            flowerPrice = flowersCount * 2.80;
            if (flowersCount > 80) {
                flowerPrice = flowerPrice - (flowerPrice * 0.15);
            }
            break;
        case 'Narcissus':
            flowerPrice = flowersCount * 3;
            if (flowersCount < 120) {
                flowerPrice = flowerPrice + (flowerPrice * 0.15);
            }
            break;
        case 'Gladiolus':
            flowerPrice = flowersCount * 2.50;
            if (flowersCount < 80) {
                flowerPrice = flowerPrice + (flowerPrice * 0.20);
            }
            break;
        default:
            break;
    }

    let money = Math.abs(flowerPrice - budget);

    if (budget >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flower} and ${money.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
    }

}

newHouse(['Roses', '55', '250']);
newHouse(['Tulips', '88', '260']);
newHouse(["Narcissus", "119", "360"]);
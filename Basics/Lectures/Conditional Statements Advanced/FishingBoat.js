function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMan = input[2];

    let boatPrice = 0;

    switch (season) {
        case 'Spring':
            boatPrice += 3000;
            break;
        case 'Summer':
        case 'Autumn':
            boatPrice += 4200;
            break;
        case 'Winter':
            boatPrice += 2600;
            break;
        default:
            break;

    }

    if (fisherMan > 0 && fisherMan <= 6) {
        boatPrice = boatPrice - (boatPrice * 0.10);
    } else if (fisherMan >= 7 && fisherMan <= 11) {
        boatPrice = boatPrice - (boatPrice * 0.15);
    } else {
        boatPrice = boatPrice - (boatPrice * 0.25)
    }

    if (fisherMan % 2 == 0 && season != 'Autumn') {
        boatPrice = boatPrice - (boatPrice * 0.05);
    }

    if (budget < boatPrice) {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);


/*function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMan = Number(input[2]);

    let boatPrice = 0;
    let discount = 0;

    let isAutumn = 'Autumn';

    if (season == 'Spring') {
        boatPrice += 3000;
    } else if (season == 'Summer' || season == 'Autumn') {
        boatPrice += 4200;
    } else if (season == 'Winter') {
        boatPrice += 2600;
    }

    if (fisherMan >= 0 && fisherMan <= 6) {
        discount += 0.10;
    } else if (fisherMan > 7 && fisherMan <= 11) {
        discount += 0.15;
    } else {
        discount += 0.25;
    }

    if (fisherMan % 2 == 0 && !isAutumn) {
        discount += 0.5;
    }

    let price = Math.abs(boatPrice - (boatPrice * discount));
 
    if(budget > price) {
        console.log(`Yes! You have ${Math.abs((budget - price)).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${Math.abs((price - budget)).toFixed(2)} leva.`)
    }

}*/

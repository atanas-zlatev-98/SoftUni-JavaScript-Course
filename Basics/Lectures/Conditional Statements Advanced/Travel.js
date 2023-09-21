function travel(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;

    let place;
    let destication;

    if (budget <= 100) {
        if (season == 'summer') {
            place = 'Camp';
            price = budget * 0.30;
        } else if (season == 'winter') {
            place = 'Hotel'
            price = budget * 0.70;
        }
        destication = 'Bulgaria'
    } else if (budget > 100 && budget <= 1000) {
        if (season == 'summer') {
            place = 'Camp'
            price = budget * 0.40;
        } else if (season == 'winter') {
            place = 'Hotel';
            price = budget * 0.80;
        }
        destication = 'Balkans'
    } else if (budget > 1000) {
        if (season == 'summer' || season == 'winter') {
            price = budget * 0.90;
        }
        place = 'Hotel';
        destication = 'Europe';
    }

    console.log(`Somewhere in ${destication}`);
    console.log(`${place} - ${(price).toFixed(2)}`);
}

travel(["50", "summer"]);
travel(["75", "winter"]);
travel(["312", "summer"]);
travel(["678.53", "winter"]);
travel(["1500", "summer"]);
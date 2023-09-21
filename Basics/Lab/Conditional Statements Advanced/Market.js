function market(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if (city == 'Sofia') {

        if (product == 'coffee') {
            price += 0.50;
        } else if (product == 'water') {
            price += 0.80;
        } else if (product == 'beer') {
            price += 1.20;
        } else if (product == 'sweets') {
            price += 1.45;
        } else {
            price += 1.60;
        }
    } else if (city == 'Plovdiv') {

        if (product == 'coffee') {
            price += 0.40;
        } else if (product == 'water') {
            price += 0.70;
        } else if (product == 'beer') {
            price += 1.15;
        } else if (product == 'sweets') {
            price += 1.30;
        } else {
            price += 1.50;
        }

    }else {

        if (product == 'coffee') {
            price += 0.45;
        } else if (product == 'water') {
            price += 0.70;
        } else if (product == 'beer') {
            price += 1.10;
        } else if (product == 'sweets') {
            price += 1.35;
        } else {
            price += 1.55;
        }
    }

    let totalPrice = price * quantity;

    console.log(totalPrice);
}

market(["coffee","Varna","2"]);
market(["peanuts", "Plovdiv", "1"]);
market(["beer", "Sofia", "2"]);
market(["water", "Plovdiv", "2"]);
market(["sweets", "Sofia", "2.23"]);
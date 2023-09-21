function skiVacation(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let noshtuvki = days - 1;
    let discount = 0;

    let roomPrice = 0;

    switch (roomType) {
        case 'room for one person':
            roomPrice += 18;
            break;
        case 'apartment':
            roomPrice += 25;
            break;
        case 'president apartment':
            roomPrice += 35;
            break;
        default:
            break;
    }

    let totalPrice = roomPrice * noshtuvki;

    if (roomType == 'apartment') {

        if (days < 10) {
            discount += 0.30;
        } else if (days >= 10 && days < 15) {
            discount += 0.35;
        } else {
            discount += 0.50;
        }

    } else if (roomType == 'president apartment') {
        if (days < 10) {
            discount += 0.10;
        } else if (days >= 10 && days < 15) {
            discount += 0.15;
        } else {
            discount += 0.20;
        }
    } else {
   
    }
    let priceWithDiscount = totalPrice - (totalPrice * discount);

    if (grade == 'positive') {
        priceWithDiscount = priceWithDiscount + (priceWithDiscount * 0.25);

    }else {
        priceWithDiscount = priceWithDiscount - (priceWithDiscount * 0.10);
    }


    console.log((priceWithDiscount).toFixed(2));

}

skiVacation(['14', 'apartment','positive']);
skiVacation(["30","president apartment","negative"]);
skiVacation(["12", "room for one person", "positive"]);
skiVacation(["2", "apartment", "positive"]);
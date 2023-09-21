function hotelRoom(input) {
    let month = input[0];
    let stay = input[1];

    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice += 50;
            apartmentPrice += 65;

            if (stay > 7 && stay < 14) {
                studioPrice = studioPrice - (studioPrice * 0.05);
            } else if(stay >= 14) {
                studioPrice = studioPrice - (studioPrice * 0.30);
            }

            break;
        case "June":
        case "September":
            studioPrice += 75.20;
            apartmentPrice += 68.70;

            if (stay > 14) {
                studioPrice = studioPrice - (studioPrice * 0.20);
            }
            break;
        case "July":
        case "August":
            studioPrice += 76;
            apartmentPrice += 77;
            break;
        default:
            break;
    }

    if (stay > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
    }

    let totalStudioPrice = studioPrice * stay;
    let totalApartmetPrice = apartmentPrice * stay;

    console.log(`Apartment: ${(totalApartmetPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(totalStudioPrice).toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);

function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let days = 0;
    let spendDays = 0;

    let index = 2;
    let command = input[index]; // spend

    while (moneyAvailable >= 0) {
        days++;
        index++;

        if (command === 'spend') {
            let moneyToSpend = Number(input[index]);
            moneyAvailable -= moneyToSpend;

            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }
            spendDays++;

            if (spendDays === 5) {
                console.log("You can't save the money.");
                console.log(days);
                break;
            }

        } else if (command === 'save') {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            moneyAvailable += moneyToSave;

            if (moneyAvailable >= moneyNeeded) {
                console.log(`You saved the money for ${days} days.`);
                break;
            }
        }

        index++;
        command = input[index];
    }



}

vacation(["2000",

    "1000",

    "spend",

    "1200",

    "save",

    "2000"]);
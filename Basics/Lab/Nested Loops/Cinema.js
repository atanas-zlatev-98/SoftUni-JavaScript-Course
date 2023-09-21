function cinema(input) {
    let index = 0;
    let command = input[index];
    index++;

    let countStudentsTicket = 0;
    let countStandardTicket = 0;
    let countKidsTicket = 0;
    let countTotalTicket = 0;

    while (command !== 'Finish') {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let countSellTicket = 0;
        while (ticketType !== 'End') {
            countSellTicket++;

            /*if (countSellTicket >= freeSpace) {
                break;
            }*/
            switch (ticketType) {
                case 'student': countStudentsTicket++; break;
                case 'standard': countStandardTicket++; break;
                case 'kid': countKidsTicket++; break;
            }
            if (countSellTicket >= freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;
        }


        countTotalTicket += countSellTicket;

        let percentageFull = countSellTicket / freeSpace * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let percentageStudentTicket = countStudentsTicket / countTotalTicket * 100;
    let percentageStandard = countStandardTicket / countTotalTicket * 100;
    let percentageKid =  countKidsTicket / countTotalTicket * 100;


    console.log(`Total tickets: ${countTotalTicket}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKid.toFixed(2)}% kids tickets.`);


}

cinema(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
/*cinema(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])*/
function minNumber(input) {
    let index = 0;
    let maxNumber = Number(input[0]);

    let command = input[index];
    index++;


    while (command !== 'Stop') {
        let number = Number(command);

        if(maxNumber > number){
            maxNumber = number;
        }

        command = input[index];
        index++;

    }
    console.log(maxNumber);
}
minNumber(["100","99","80","70","Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);
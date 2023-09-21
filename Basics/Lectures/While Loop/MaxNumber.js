function maxNumber(input) {
    let index = 0;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    let command = input[index];
    index++;


    while (command !== 'Stop') {
        let number = Number(command);

        if(maxNumber < number){
            maxNumber = number;
        }

        command = input[index];
        index++;

    }
    console.log(maxNumber);
}
maxNumber((["100",

    "99",

    "80",

    "70",

    "Stop"]))
function numbersByNine(input) {
    let minValue = Number(input[0]);
    let maxValue = Number(input[1]);

    let sum = 0;
    let buffer = '';

    for (let i = minValue; i <= maxValue; i++) {
       
        if (i % 9 === 0) {
            sum += i;
            buffer += i + '\n';
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(buffer);

}

numbersByNine(['100', '200']);
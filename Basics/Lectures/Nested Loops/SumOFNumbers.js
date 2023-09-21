function sumOfNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isFound = false;
    let counter = 0;

    for (let i = startInterval; i <= endInterval; i++) {

        for (let x = startInterval; x <= endInterval; x++) {
            counter++;
            if (i + x === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${x} = ${magicNumber})`);
                isFound = true;
            }
        }

        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfNumbers(['1', '10', '5']);
sumOfNumbers(['23', '24', '20']);
sumOfNumbers(['88', '888', '1000']);
sumOfNumbers(['88', '888', '2000']);
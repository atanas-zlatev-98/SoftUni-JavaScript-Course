function table() {

    let isFinished = false;

    let sum = 0;

    for (let i = 1; i <= 10; i++) {

        for (let m = 1; m <= 10; m++) {

            if (m === 5 && i === 5) {
                isFinished = true;
                break;
            }

            console.log(`${i} * ${m} = ${sum = i * m}`);

        }

        if (isFinished) {
            break;
        }

    }

}

table();
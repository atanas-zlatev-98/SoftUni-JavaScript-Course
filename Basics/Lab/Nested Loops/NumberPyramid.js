function numberPyramid(input) {

    let num = Number(input[0]);
    let printNumber = 1;
    let isFound = false;

    for (let rows = 1; rows <= num; rows++) {
        let buffer = '';

        for (let cols = 1; cols <= rows; cols++) {
            buffer += `${printNumber} `;

            if (printNumber === num) {
                isFound = true;
                break;
            }

            printNumber++;
        }
        console.log(buffer);
        if (isFound) {
            break;
        }

    }

}
numberPyramid(['7']);
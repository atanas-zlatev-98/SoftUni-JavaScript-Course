function numberPyramidWhile(input) {
    let num = Number(input[0]);
    let printNumber = 1;
    let isFound = false;
    let row = 1;


    while (!isFound) {

        let buffer = '';

        for (let col = 1; col <= row; col++) {

            buffer += printNumber + ' ';

            if (printNumber === num) {

                isFound = true;
                break;

            }
            printNumber++;
        }

        console.log(buffer);
        row++;
    }

}
numberPyramidWhile(['22']);
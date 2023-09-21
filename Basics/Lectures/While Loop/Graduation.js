function gradiation(input) {
    let index = 0;

    let name = input[index];
    index++;

    let sumGrade = 0;
    let i = 1;

    let badGradeCount = 0;
    let hasExcluded = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGradeCount++;
            if (badGradeCount === 2) {
                console.log(`${name} has been excluded at ${i} grade`);
                hasExcluded = true;
                break;
            }
            continue;
        }


        sumGrade += grade;
        i++;
    }

    if (!hasExcluded) {
        let avg = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }


}

gradiation(["Mini",

    "5",

    "6",

    "5",

    "6", "5", "6", "6", "2", "3"]);
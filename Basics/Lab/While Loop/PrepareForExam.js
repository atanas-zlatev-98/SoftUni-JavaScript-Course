function exam(input) {

    let maxBadGrades = input[0];

    let index = 1;

    let badGradeCount = 0;
    let goodGradesCount = 0;
    let averageGrade = 0;
    let taskName = '';

    while(badGradeCount < maxBadGrades){
        let command = input[index];

        if(command <= 4){
            badGradeCount++;
            averageGrade += Number(command);
        }else if(command > 4){
            goodGradesCount++;
            averageGrade += Number(command);
        }else {
            taskName = command;
        }

        index++;
        command = input[index];

        if(command === 'Enough'){
            console.log(`Average score: ${(averageGrade / (badGradeCount + goodGradesCount)).toFixed(2)}`);
            console.log(`Number of problems: ${badGradeCount + goodGradesCount}`);
            console.log(`Last problem: ${taskName}`);
            break;
        }

        if(badGradeCount >= maxBadGrades){
            console.log(`You need a break, ${badGradeCount} poor grades.`);
            break;
        }

    }

}

exam(["2","Income","3","Game Info","6","Best Player","4"]);

//exam(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
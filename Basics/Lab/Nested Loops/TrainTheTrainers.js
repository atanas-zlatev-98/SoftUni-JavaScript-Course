function trainTheTrainers(input){
let index = 0;
let n = Number(input[index]);
index++;

let command = input[index];
index++;

let sumGrade = 0;
let counter = 0;

while(command !== 'Finish'){
    counter ++;
    let presentationName = command;
    let sumCurrentGrade = 0;

    for(let i = 0; i< n;i++){
        let grade = Number(input[index]);
        index++;

        sumCurrentGrade += grade;
    }

    let tempAverage = sumCurrentGrade / n;
    sumGrade += tempAverage;
    console.log(`${presentationName} - ${tempAverage.toFixed(2)}.`);

    command = input[index];
    index++;
}

let averageGrade = sumGrade / counter;
console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`)

}

trainTheTrainers(["2",

"While-Loop",

"6.00",

"5.50",

"For-Loop",

"5.84",

"5.66",

"Finish"])
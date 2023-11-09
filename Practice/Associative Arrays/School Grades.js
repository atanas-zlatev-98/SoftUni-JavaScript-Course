function schoolGrades(arr) {

    let students = {};

    for(let student of arr){
        let stud = student.split(' ');
        let studentName = stud.shift();

        if(!students[studentName]){
            students[studentName] = [];
        }
        
        for(let i = 0;i< stud.length;i++){

            if(studentName in students){
                students[studentName].push(Number(stud[i]))
            }

        }

    }

    let sorted = Object.entries(students).sort();

    for(let [name,grades] of sorted){
        let sum = grades.reduce((a,b) => a+b) / grades.length;
        console.log(`${name}: ${sum.toFixed(2)}`);
    }

}

schoolGrades(['Steven 3 5 6 4',

'George 4 6',

'Tammy 2 5 3',

'Steven 6 3']);

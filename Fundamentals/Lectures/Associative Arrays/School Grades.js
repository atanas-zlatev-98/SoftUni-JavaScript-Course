function schoolGrades(arr){

    let students = {};
    
    for(let student of arr){

        let stu = student.split(' ');
        let studentName = stu.shift();
        let grades = stu.map(Number);

        if(!students.hasOwnProperty(studentName)){
            students[studentName] = grades;
        }else {
            grades.map(el => {students[studentName].push(el)});
        }       
        
    }

    for(let [name, grades] of Object.entries(students)){

        let grade = grades.reduce((a,b) => a+b);

        let averageGrade = grade / grades.length;
        
        students[name] = averageGrade;
    }
    
    let sorted = Object.entries(students).sort((a,b)=>a[0].localeCompare(b[0]));

    for(let [studentName,studentGrade] of sorted){
        console.log(`${studentName}: ${studentGrade.toFixed(2)}`);
    }

}

//schoolGrades(['Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3','Tim 6 6']);
schoolGrades(['Steven 3 5 6 4','George 4 6','Tammy 2 5 3','Steven 6 3'])
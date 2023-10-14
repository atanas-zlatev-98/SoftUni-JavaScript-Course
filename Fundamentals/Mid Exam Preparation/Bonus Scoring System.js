function bonus(arr){

    let numberOfStudents = Number(arr.shift());
    let numberOfLectures = arr.shift();
    let additionalBonus = arr.shift();

    let maxBonus = 0;
    let maxAtendence = 0;

    for(let i = 0; i < numberOfStudents;i++){


        let currentStudentAtendence = Number(arr[i]);
       
        let currentStudentBonus = currentStudentAtendence / numberOfLectures * (5 + Number(additionalBonus));

        if(maxBonus >= 0){
            if(currentStudentBonus > maxBonus){
                maxAtendence = currentStudentAtendence;
                maxBonus = currentStudentBonus;
            }
           
        }
       
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxAtendence} lectures.`);
}

bonus(['5',  '25', '30','12', '19', '24','16', '20']);
bonus(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18']);
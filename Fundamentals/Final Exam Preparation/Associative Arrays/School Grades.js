function grades(arr){

    let students = {};

    for(let student of arr){
        let split = student.split(' ');
        let name = split.shift();
        
        if(students.hasOwnProperty(name)){

        }else {
            students[name] = {};
        }
        

    }

}

grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)
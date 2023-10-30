function employees(arr){

    let employee = {};

    for(let i = 0;i < arr.length;i++){
        let name = arr[i];
        let prn = name.length;

        employee.name = name;
        employee.number = prn;

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`)
    }

}
employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);
employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland']);
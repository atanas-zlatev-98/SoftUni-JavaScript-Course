function personInfo(firstName,lastName,age){
    let person = {

        firstName,
        lastName,
        age
    };

    return person;
}

let result = personInfo('Peter','Pan',20)
console.log(result);
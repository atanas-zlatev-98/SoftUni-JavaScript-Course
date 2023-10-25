function toJson(name,lastName,hairColor){

    let person = {

        name,
        lastName,
        hairColor
        
    }

    console.log(JSON.stringify(person));


}

toJson('George', 'Jones','Brown')
function convert(firstName, lastName, hairColor){

    let person = {};

    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let convert = JSON.stringify(person);

    console.log(convert);

}

convert('George', 'Jones','Brown');
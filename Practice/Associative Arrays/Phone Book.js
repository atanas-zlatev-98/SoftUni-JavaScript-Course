function phoneBook(arr){

    let persons = {};

    for(let person of arr){
        let [personName,phone] = person.split(' ');

        if(personName in persons){
            persons[personName] = phone;
        }
        persons[personName] = phone;

    }

    for(let [name,number] of Object.entries(persons)){
        console.log(`${name} -> ${number}`);
    }

}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
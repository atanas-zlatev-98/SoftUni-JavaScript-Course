function emp(arr) {

    let persons = {};

    for(let person of arr){
        let personNumber = person.length;
        persons[`${person}`] = personNumber;
    }

    for(let [name,number] of Object.entries(persons)){
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    }

}

emp(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

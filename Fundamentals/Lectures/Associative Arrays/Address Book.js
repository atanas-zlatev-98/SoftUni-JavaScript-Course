function addressBook(arr){

let addressBook = {};

    for(let person of arr){

        let [name,address] = person.split(':');
       
        addressBook[name] = address;
        
        if(addressBook.hasOwnProperty(name)){
            addressBook[name] = address;
        }

    }

    let kvps = Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0]));

    for(let person of kvps){
        let [personName,personAddress] = person;
        console.log(`${personName} -> ${personAddress}`);
    }

}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])

/*addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])*/
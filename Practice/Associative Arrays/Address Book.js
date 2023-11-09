function addressBook(arr){

    let addresses = {};

    for(let address of arr){
        let [person,personAddress] = address.split(':');

        addresses[person] = personAddress;
    }

    let sorted = Object.entries(addresses).sort();

    for(let [name,address] of sorted){
        console.log(`${name} -> ${address}`);
    }


}

addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])
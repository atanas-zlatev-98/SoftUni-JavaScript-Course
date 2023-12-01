function phoneBook(arr){
    let book = {};

    for(let phone of arr){
        let [name,phoneNum] = phone.split(' ');
        book[name] = phoneNum;
    }

    for(let [name,phone] of Object.entries(book)){
        console.log(`${name} -> ${phone}`);
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
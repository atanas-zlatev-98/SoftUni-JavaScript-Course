function phoneBook(arr){
let book = {};
for(let phones of arr){
    let [name, phone] = phones.split(' ');

    book[name] = phone;

}

for(let [name,value] of Object.entries(book)){
    console.log(`${name} -> ${value}`);
}

}

phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
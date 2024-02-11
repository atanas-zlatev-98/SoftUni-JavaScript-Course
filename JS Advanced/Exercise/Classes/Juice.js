function juiceFlavours(arr){
const juices = {};
const bottles = {};

for(let juice of arr){
    let [fruit, qty] = juice.split(' => ');
    
    if(fruit in juices){
        juices[fruit] += Number(qty);
    }else {
        juices[fruit] = Number(qty);
    }

    if(juices[fruit] >= 1000){
        bottles[fruit] = juices[fruit] / 1000;
    }
}

for(let key in bottles){
    console.log(`${key} => ${Math.trunc(bottles[key])}`);
}
}

juiceFlavours(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])
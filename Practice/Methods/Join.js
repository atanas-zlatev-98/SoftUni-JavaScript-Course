/*
-Requires delimiter
- Loop through all elements and separate them by the delimiter
*/

let array = [10,20,30,40,50,60,70];

function join(array,delimiter){
    let result = '';

    for(let i = 0;i < array.length - 1 ;i++){
        
        result += String(array[i]); //if one of the elements is a string, automatically the second one is also a string
        result += delimiter;
    }

    if(array.length > 0){
        result += array[array.length - 1];
    }

    return result;

}

console.log(join(array, ' -- '));
console.log(join([5], ' -- '));

console.log('-------------------');

console.log(array.join(' -- '));
console.log(array.join(' -- '));

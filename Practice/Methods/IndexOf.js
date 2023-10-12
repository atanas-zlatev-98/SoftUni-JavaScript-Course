/*
if elements it found return index of element
if not return -1
*/

let array = [1,2,3,4,5,6]

function indexOf(arr,element){

    for(let i = 0; i < arr.length;i++){
        if(arr[i] === element){
            return i;
        }
    }
    return -1; // default value

}

let findIndexOf = indexOf(array,3);
console.log(findIndexOf);

console.log('------------------');

let findIndex = array.indexOf(3);
console.log(findIndex);

console.log('------------------');

let findNotExistingIndex = array.indexOf(7);
console.log(findNotExistingIndex); // returns defaull value -1;


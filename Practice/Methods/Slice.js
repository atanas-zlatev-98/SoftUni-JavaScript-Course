/*
- Requires start and end indexes
- Creates a new array from part of another
- The end index is (exclusive)


   ** create output array
   ** begin iterating input array from starting index
   ** copy values from input to output
   ** when end index is reached, return result
*/

let array = [10,20,30,40,50,60,70];

function slice(arr, startIndex,endIndex){

    let result = [];

    for(let i = startIndex; i < endIndex;i++){
        result.push(arr[i]);
    }

    return result;
}

console.log(slice(array,1,3));

console.log('-----------------');

let sliced = array.slice(1,3);
console.log(sliced);

console.log('----------------------');
console.log('With Negative Values');

function sliceNegative(arr, startIndex,endIndex){

    let result = [];

    if(startIndex < 0){
        startIndex += arr.length;
    }

    if(endIndex < 0){
        endIndex += arr.length;
    }

    for(let i = startIndex; i < endIndex;i++){
        result.push(arr[i]);
    }

    return result;
}

console.log(sliceNegative(array,1,-1)); // removes first and last element
console.log(sliceNegative(array,-3,-1)); // start from back with 3 and let 1 go


console.log('-----------------');

let slicedNegative = array.slice(1,-1);
let slicedNegative2 = array.slice(-3,-1);
console.log(slicedNegative);
console.log(slicedNegative2);

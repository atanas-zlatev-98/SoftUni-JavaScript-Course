function biggerHalf(arr){
    arr.sort((a,b) => a - b);

     const mid = Math.floor(arr.length / 2);


     return arr.slice(mid);


}
console.log(biggerHalf([4,7,2,5]));
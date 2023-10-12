function firstLast(arr){

   let k = arr.shift();
   
   let sliced = arr.slice(0,k);
   let secondSlice = arr.slice(-k);

   console.log(sliced.join(' '));
   console.log(secondSlice.join(' '));

}
firstLast([3, 6, 7, 8, 9]);
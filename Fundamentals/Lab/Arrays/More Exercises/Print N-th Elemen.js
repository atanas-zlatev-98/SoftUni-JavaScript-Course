function printN(arr) {
  let newArr = [];
  let lastElement = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if(i % lastElement === 0){
        newArr.push(arr[i]);
    }
  }
console.log(newArr.join(' '));
}
printN(["dsa", "asd", "test", "test", "2"]);
printN(["5", "20", "31", "4", "20", "2"]);
//printN(['1', '2', '3', '4', '5', '6']);*/

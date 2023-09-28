function add(arr) {
  let orginalSum = 0;
  let modifiedSum = 0;

  let modifiedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      modifiedArray.push(arr[i] + i);
    } else {
      modifiedArray.push(arr[i] - i);
    }
    orginalSum+= arr[i];
  }

  for(let i = 0;i < modifiedArray.length;i++){
    modifiedSum += modifiedArray[i];
  }

  console.log(modifiedArray);
  console.log(orginalSum);
  console.log(modifiedSum);
}
//add([5, 15, 23, 56, 35]);
add([-5, 11, 3, 0, 2]);

function equal(arr1, arr2) {
    
  let areEqual = false;
  let arrOneSum = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    } else {
      arrOneSum += Number(arr1[i]);
      areEqual = true;
    }
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${arrOneSum}`);
  }
}
equal(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equal(["10", "20", "30"], ["10", "20", "30"]);
equal(['1'], ['10']);

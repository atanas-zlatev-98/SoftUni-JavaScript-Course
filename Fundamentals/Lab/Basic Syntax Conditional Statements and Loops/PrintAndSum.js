function printAndSum(start, end) {
  let sum = 0;
  let buffer = "";

  for (let i = start; i <= end; i++) {

    buffer += i + " ";
    sum += i;
    
  }
  console.log(buffer);
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

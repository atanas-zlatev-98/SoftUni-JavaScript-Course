function SumOfOddNumbers(n) {
  let counter = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i += 2) {
    console.log(i)
    counter++;
    sum += i;

    if(counter == n){
        console.log('Sum: ' + sum);
        break;
    }
  }
}

SumOfOddNumbers(3);

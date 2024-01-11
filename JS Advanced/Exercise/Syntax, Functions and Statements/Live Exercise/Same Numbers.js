function sameNumbers(number) {
  let isSame = true;
  let sum = 0;
  let numAsString = number.toString();
  sum = Number(numAsString[0]);

  for (let i = 1; i < numAsString.length; i++) {
    if (numAsString[i] !== numAsString[i - 1]) {
      isSame = false;
    }

    sum += Number(numAsString[i]);
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
console.log("-------");
sameNumbers(1234);



console.log("Short Version");

function sameNumberV2(number) {

  let isSame = true;
  let sum = 0;

  number
    .toString()
    .split("")
    .map((x, i, self) => {
      if (x !== self[0]) {
        isSame = false;
      }
      return (sum += Number(x));
    });

    console.log(isSame);
    console.log(sum);
}
sameNumberV2(2222222);
sameNumberV2(1234)

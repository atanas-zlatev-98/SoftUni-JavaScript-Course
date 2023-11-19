function lettersChangeNumbers(str) {
  let strings = str.split(" ").filter((str) => str != "");
let sum = 0;
  for (let str of strings) {
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    let num = Number(str.slice(1, str.length - 1));

    if (firstLetter == firstLetter.toUpperCase()) {
      let position = firstLetter.charCodeAt() - 64;
      num /= position;
     
    }else {
        let position = firstLetter.charCodeAt() - 96;
        num *= position;
    }

    if(lastLetter == lastLetter.toUpperCase()){
        let position = lastLetter.charCodeAt() - 64;
        num -= position

    }else {
        let position = lastLetter.charCodeAt() - 96;
        num += position;
    }
    sum += num;
  }
  console.log(sum.toFixed(2));
}

lettersChangeNumbers("A12b s17G");

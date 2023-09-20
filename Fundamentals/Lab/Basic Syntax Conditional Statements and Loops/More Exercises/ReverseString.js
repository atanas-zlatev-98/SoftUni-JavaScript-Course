function reverseString(word) {
  let wordToReverse = String(word);

  let template = "";

  for (let i = wordToReverse.length - 1; i >= 0; i--) {
    let currentChar = wordToReverse[i];
    template += currentChar;
  }

  console.log(template);
}

reverseString("Hello");
reverseString('SoftUni');
reverseString(1234);

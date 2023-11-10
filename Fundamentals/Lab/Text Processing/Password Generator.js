function passwordGenerator(arr) {
  let [str1, str2, replacement] = arr;
  let concatenatedStr = str1 + str2;
  let vowels = ["a", "e", "i", "o", "u"];

  let idx = 0;

  for (let char of concatenatedStr) {
    if (vowels.includes(char)) {
      concatenatedStr = concatenatedStr.replace(char, replacement[idx].toUpperCase());
      idx++;

      if (idx == replacement.length) {
        idx = 0;
      }
    }
  }
  let password = concatenatedStr.split('').reverse().join('');
  console.log(`Your generated password is ${password}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);

function oddOccurances(str) {
  let strAsArr = str.split(" ");

  let obj = new Map();
  newArr = [];

  for (let i = 0; i < strAsArr.length; i++) {
    let currentWord = strAsArr[i].toLowerCase();
    let counter = 0;

    for (let j = 0; j < strAsArr.length; j++) {
      let nextWord = strAsArr[j].toLowerCase();

      if (currentWord == nextWord) {
        counter++;
      }
    }

    if (!obj.hasOwnProperty(currentWord)) {
      obj.set(currentWord,counter);
    }
  }

  for (let [word, count] of obj) {
    if (count % 2 !== 0) {
      newArr.push(word);
    }
  }

  console.log(newArr.join(' '));
}

oddOccurances("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')

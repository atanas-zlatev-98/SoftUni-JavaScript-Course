function oddOccurrences(str) {
  let sentence = str.split(" ").map((word) => word.toLowerCase());
  let occurances = {};

  for (let words of sentence) {
    if (occurances.hasOwnProperty(words)) {
      occurances[words] += 1;
    } else {
      occurances[words] = 1;
    }
  }

  let sorted = Object.entries(occurances).sort((a,b)=>b[1] - a[1]);
  let newArr = [];
  for (let [sent, occur] of sorted) {
    if (occur % 2 !== 0) {
      newArr.push(sent);
    }
  }

  console.log(newArr.join(' '));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');

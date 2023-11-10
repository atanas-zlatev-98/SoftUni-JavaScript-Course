function revealWords(wordStr, text) {
  let words = wordStr.split(", ");

  for (let word of words) {
    let count = word.length;
    let starTemplate = "*".repeat(count);

    text = text.replace(starTemplate, word);
  }

  console.log(text);
}

revealWords(
  "great",

  "softuni is ***** place for learning new programming languages"
);

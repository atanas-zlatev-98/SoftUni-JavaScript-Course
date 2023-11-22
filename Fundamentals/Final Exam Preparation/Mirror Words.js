function mirrorWords(arr) {
  let sentence = arr.shift();

  let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;

  let match = sentence.match(pattern);

  let pairs = [];

  if (match) {
    for (let word of match) {
      if (word.includes("#")) {
        let words = word.split("#");
        let getValidIndex = words.filter((word) => word);
        let [firstWord, secondWord] = getValidIndex;

        let reverseSecondWord = secondWord.split("").reverse().join("");

        if (firstWord === reverseSecondWord) {
          pairs.push(`${firstWord} <=> ${secondWord}`);
        }
      } else if (word.includes("@")) {
        let words = word.split("@");
        let getValidIndex = words.filter((word) => word);
        let [firstWord, secondWord] = getValidIndex;

        let reverseSecondWord = secondWord.split("").reverse().join("");

        if (firstWord === reverseSecondWord) {
          pairs.push(`${firstWord} <=> ${secondWord}`);
        }
      }
    }

    console.log(`${match.length} word pairs found!`);
  } else {
    console.log(`No word pairs found!`);
  }

  if (pairs.length > 0) {
    console.log(`The mirror words are:`);
    console.log(`${pairs.join(", ")}`);
  } else {
    console.log(`No mirror words!`);
  }
}

mirrorWords(["@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"]);

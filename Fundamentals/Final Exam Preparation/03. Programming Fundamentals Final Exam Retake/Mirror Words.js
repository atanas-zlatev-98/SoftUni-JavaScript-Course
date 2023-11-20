function mirrorWords(arr) {
    let message = arr.shift();
    let pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  
    let match = message.match(pattern);
  
    let mirrorWords = [];
  
    if (match) {
      for (let matches of match) {
        if (matches.includes("#")) {
          let tokens = matches.split("#");
  
          let remove = tokens.filter((n) => n);
  
          let firstWord = remove[0];
          let secondWord = remove[1];
  
          let reversedSecondWord = secondWord.split("").reverse().join("");
  
          if (firstWord === reversedSecondWord) {
            let str = `${firstWord} <=> ${secondWord}`;
            mirrorWords.push(str);
          }
        } else if (matches.includes("@")) {
          let tokens = matches.split("@");
  
          let remove = tokens.filter((n) => n);
  
          let firstWord = remove[0];
          let secondWord = remove[1];
  
          let reversedSecondWord = secondWord.split("").reverse().join("");
  
          if (firstWord === reversedSecondWord) {
            let str = `${firstWord} <=> ${secondWord}`;
            mirrorWords.push(str);
          }
        }
      }
    } else {
      console.log(`No word pairs found!`);
    }
  
    if (match) {
      console.log(`${match.length} word pairs found!`);
    }
  
    if (mirrorWords.length > 0) {
      console.log(`The mirror words are:`);
      console.log(`${mirrorWords.join(", ")}`)
    } else {
      console.log(`No mirror words!`);
    }
  }
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
    ]
    );

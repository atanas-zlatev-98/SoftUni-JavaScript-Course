function latinLetters(n) {
  //convert input to number
  let nAsString = Number(n);

  //determine letters to use in combination
  let chars = "abcdefghijklmnopqrstuvwxyz";

  //use three nested loops

  for (let i = 0; i < nAsString; i++) {
    for (let j = 0; j < nAsString; j++) {
      for (let k = 0; k < nAsString; k++) {
        console.log(chars[i], chars[j], chars[k]);
      }
    }
  }
}

latinLetters("3");

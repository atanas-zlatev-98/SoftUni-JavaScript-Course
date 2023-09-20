function triplesOfLatinLetters(num) {
  for (let i = 0; i < num; i++) {
    let first = String.fromCharCode(i + 97);
    for (let j = 0; j < num; j++) {
      let second = String.fromCharCode(j + 97);
      for (let c = 0; c < num; c++) {
        let third = String.fromCharCode(c + 97);
        console.log(`${first}${second}${third}`);
      }
    }
  }
}
triplesOfLatinLetters("3");

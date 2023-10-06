function characters(char1, char2) {
  let code1 = char1.charCodeAt();
  let code2 = char2.charCodeAt();

  let result = [];

  if(code1 < code2){
    for (let i = code1 + 1; i < code2; i++) {
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
      }
  }else {
    for (let i = code2 + 1; i < code1; i++) {
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
      }
  }

 
  console.log(result.join(' '));
}

//characters("a", "d");
characters('C','#');

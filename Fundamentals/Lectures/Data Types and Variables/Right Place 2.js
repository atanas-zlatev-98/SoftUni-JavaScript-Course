function rightPlace(word,char,matchWord){
    let result = word.replace('_',char);

   let output = result === matchWord ? "Matched" : 'Not Matched';
   console.log(output);
}
rightPlace('H_llo','e','Hello');
rightPlace('Str_ng', 'I','Strong');
rightPlace('Str_ng', 'i','String');
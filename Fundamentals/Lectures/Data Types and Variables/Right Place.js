function rightPlace(word,char,matchWord){

    let fixedWord = '';

    for(let i = 0; i< word.length;i++){
        if(word[i] == '_'){
            fixedWord += char;
        }else {
            fixedWord += word[i];
        }
    }

    if( fixedWord == matchWord){
        console.log('Matched')
    }else {
        console.log('Not Matched')
    }

}
rightPlace('H_llo','e','Hello');
rightPlace('Str_ng', 'I','Strong');
rightPlace('Str_ng', 'i','String');
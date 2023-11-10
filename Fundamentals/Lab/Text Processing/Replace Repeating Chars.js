function replace(str){

    let noRepeats = '';
    let prevChar = '';

    for(let i = 0; i < str.length;i++){
        let currentChar = str[i];

        if(currentChar !== prevChar){
            noRepeats += currentChar;
            prevChar = currentChar;
        }
    }

    console.log(noRepeats);


}

replace('aaaaabbbbbcdddeeeedssaa')
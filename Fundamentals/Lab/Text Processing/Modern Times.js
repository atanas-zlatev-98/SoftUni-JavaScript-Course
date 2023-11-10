function modernTimes(str){

    let text = str.split(' ');

    let hashWords = text.filter((word) => word.startsWith('#') && word.length > 1)
  
    for(let word of hashWords){
        word = word.substring(1);
        let isValid = true;

        for(let char of word){
            if(!/[A-Za-z]/.test(char)){
                isValid = false;
                break;
            }
        }
        if(isValid){
            console.log(word);
        }
    }

}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
function strSubst(word,text){

    text = text.toLowerCase().split(' ');
    
    if(text.includes(word)){
        console.log(word);
    }else {
        console.log(`${word} no found!`);
    }

}

strSubst('javascript','JavaScript is the best programming language');
function subst(word,startIndex,count){

    let result = word.substring(startIndex,startIndex + count);
    console.log(result);

}

subst('ASentence', 1, 8);
subst('SkipWord', 4, 7);
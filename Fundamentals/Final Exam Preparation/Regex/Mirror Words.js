function mirrorWords(arr){

    let words = arr.shift();

    let pattern = /([@|#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(words);

    let wordMatches = [];
    if(match){
        let counter = 0;
        while(match !== null){

            let {wordOne,wordTwo} = match.groups;
    
            let reversedWord = wordTwo.split('').reverse().join('');
    
            if(wordOne === reversedWord){
                wordMatches.push(`${wordOne} <=> ${wordTwo}`);
            }
            counter++;
            match = pattern.exec(words);
        }
        console.log(`${counter} word pairs found!`)
    }else {
        console.log(`No word pairs found!`);
    }

    if(wordMatches.length <= 0){
        console.log(`No mirror words!`);
    }else {
        console.log(`The mirror words are:`);
        console.log(`${wordMatches.join(', ')}`)
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
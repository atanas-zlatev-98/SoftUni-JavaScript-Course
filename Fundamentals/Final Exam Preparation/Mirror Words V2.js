function mirrorWords(arr){
    let sentence = arr.shift();

    let pattern = /([@|#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let matches = [];
    let matchesCount = 0;
    let match = pattern.exec(sentence);

    while(match !== null){

        let firstWord = match[2];
        let secondWord = match[3];

        if(firstWord === secondWord.split('').reverse().join('')){
            matches.push(`${firstWord} <=> ${secondWord}`);
        }

        matchesCount++;
        match = pattern.exec(sentence);
    }

    if(matchesCount > 0){
        console.log(`${matchesCount} word pairs found!`)
    }else {
        console.log(`No word pairs found!`);
    }

    if(matches.length > 0){
        console.log(`The mirror words are:`)
        console.log(`${matches.join(', ')}`)
    }else {
        console.log(`No mirror words!`)
    }

}

mirrorWords(["@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"])
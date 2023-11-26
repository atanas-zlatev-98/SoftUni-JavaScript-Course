function emojiDetector(arr){
    let message = arr.shift();
    let threshold = 1;

    let thresholdPattern = /\d/g;
    let pattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g
    let coolEmojis = [];
    let emojiCounter = 0;
    let match = message.match(thresholdPattern);

    if(match){
        match.map((x) => threshold *= Number(x));
        console.log(`Cool threshold: ${threshold}`);
    }

    let matchEmoji = pattern.exec(message);

    while(matchEmoji !== null){
        emojiCounter++;
        let currentEmoji = matchEmoji[2];
        let currentEmojithreshold = 0;
      
        for(let emoji of currentEmoji){

            let code = emoji.charCodeAt();
            currentEmojithreshold += code;
        }

        if(currentEmojithreshold > threshold){
            coolEmojis.push(matchEmoji[0]);
        }

        matchEmoji = pattern.exec(message)
    }

    
    console.log(`${emojiCounter} emojis found in the text. The cool ones are:`)
    for(let emoji of coolEmojis){
        console.log(emoji);
    }


}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
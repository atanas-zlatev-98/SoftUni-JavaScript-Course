function emojiDetector(arr){
let message = arr.shift();
let pattern = /([:{2}|*{2}])\1(?<emoji>[A-Z][a-z]{2,})\1\1/g;

let thresholdPattern = /\d/g;

let threshold = 1;

let getThreshold = message.match(thresholdPattern);
let theCoolEmojis = [];

for(let i = 0;i < getThreshold.length;i++){
    let current = Number(getThreshold[i]);

   threshold *= current;
}

let coolEmojis = pattern.exec(message);
let emojiCounter = 0;

    while(coolEmojis !== null){
   
        let coolThreshold = 0;
        let {emoji} = coolEmojis.groups;
    
        for(let char of emoji){
            let code = char.charCodeAt();
            coolThreshold += Number(code);
        }
        
        if(coolThreshold >= threshold){
            theCoolEmojis.push(coolEmojis[0]);
        }
        emojiCounter++;
        coolEmojis = pattern.exec(message);
    }



console.log(`Cool threshold: ${threshold}`);
console.log(`${emojiCounter} emojis found in the text. The cool ones are:`);
for(let emoji of theCoolEmojis){
    console.log(emoji);
}

}

/*emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);*/
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
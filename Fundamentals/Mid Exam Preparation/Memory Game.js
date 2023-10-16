function memoryGame(arr){

    let sentence = arr.shift().split(' ');
    let turns = 0;
    let command = arr.shift();

    while(sentence.length > 1 && command.toLowerCase() !== 'end'){

        let [indexOne, indexTwo] = command.split(' ').map(Number);

        turns++;

        if(sentence[indexOne] === sentence[indexTwo]){
            console.log(`Congrats! You have found matching elements - ${sentence[indexOne]}!`);

            const num1 = sentence[indexTwo];

            const num2 = sentence[indexTwo];
            
            if (num1 === num2) {
            
            sentence.splice(indexOne, 1);
            
            indexTwo = sentence.indexOf(num2);
            
            sentence.splice(indexTwo, 1);
            }
            
        
        }else {

            if (indexOne < 0 || indexOne >= sentence.length || indexTwo < 0 || indexTwo >= sentence.length) {
                console.log("Invalid input! Adding additional elements to the board");
                let index = Math.trunc(sentence.length / 2);
                sentence.splice(index, 0, `-${turns}a`, `-${turns}a`);
            } else {
                console.log("Try again!");
            }

        }

        if (sentence.length === 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        command = arr.shift();
    }

    if (sentence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(sentence.join(' '));
    }

}

//memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0", "1 0", "1 0", "end"])
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    );
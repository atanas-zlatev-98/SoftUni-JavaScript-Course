function counterStrike(arr){

    let energy = Number(arr.shift());

    let battlesWon = 0;

    let command = arr.shift();

    while(command !== 'End of battle'){
        let currentCommand = Number(command);
        if(energy >= currentCommand){
            energy -= currentCommand;
            battlesWon++;
        }else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        }

        if(battlesWon % 3 == 0){
            energy += battlesWon;
        }
        
       command = arr.shift();
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);

}

counterStrike(["100","10","10","10","1","2","3","73","10"]);
//counterStrike(["200","54","14","28","13","End of battle"]);


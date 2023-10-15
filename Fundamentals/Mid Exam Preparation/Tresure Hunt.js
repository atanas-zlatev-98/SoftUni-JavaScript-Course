function tresureHunt(arr){

    let initialLoot = arr.shift().split('|');

    for(let i = 0; i < arr.length;i++){
        let currentIndex = arr[i].split(' ');

        let command = currentIndex.shift();

        if(command == 'Loot'){
            for(let j = 0; j < currentIndex.length;j++){

                let currentItem = currentIndex[j]
                
                if(!initialLoot.includes(currentItem)){
                    initialLoot.unshift(currentItem);
                }
            }
        }else if(command == 'Drop'){
            let convertedIndex = Number(currentIndex);
            if(typeof initialLoot[convertedIndex] !== 'undefined'){
               let moveItem = initialLoot.splice(currentIndex,1);
               initialLoot.push(moveItem.join());
            }
        }else if(command == 'Steal'){
            let convertedIndex = Number(currentIndex);
            let stealedItems = initialLoot.splice(-convertedIndex);
           
            console.log(stealedItems.join(', '));
            //console.log(initialLoot);
        }
        
    }

   
   if(initialLoot.length !== 0){

    let sum = 0;

    initialLoot.map(x => sum += x.length)

    let averageGain = sum / initialLoot.length;

    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);

   }else {

    console.log(`Failed treasure hunt.`);
    
   }

}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

tresureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

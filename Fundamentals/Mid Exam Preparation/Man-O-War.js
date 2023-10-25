function manOwar(arr){

    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warshipStatus = arr.shift().split('>').map(Number);
    let maximumHealth = Number(arr.shift());

    for(let i = 0;i < arr.length;i++){

        let commands = arr[i].split(' ');
        let command = commands[0];

        let commandNumber = Number(commands[1]);

        if(command == 'Fire'){

            if(typeof warshipStatus[commandNumber] !== "undefined"){

                let damage = Number(commands[2]);

                let index = warshipStatus[commandNumber];
                warshipStatus[commandNumber] = index - damage;

                if(warshipStatus[commandNumber] <= 0){
                    console.log(`You won! The enemy ship has sunken.`)
                    break;
                }

            }
          
        }else if(command == 'Defend'){

            let startIndex = commandNumber;
            let endIndex = Number(commands[2]);
            let damage = Number(commands[3]);

            if(typeof pirateShipStatus[startIndex] !== 'undefined' && typeof pirateShipStatus[endIndex] !== 'undefined'){

                for(let i = startIndex; i <= endIndex;i++){

                    let currentIndex = Number(pirateShipStatus[i]);

                    pirateShipStatus.splice(i,1);

                    let damageDone = currentIndex - damage;

                    if(damageDone <= 0){
                        console.log(`You lost! The pirate ship has sunken.`)
                        return;

                    }else {
                        pirateShipStatus.splice(i,0,damageDone);
                    }

                }
            }
        }else if(command == 'Repair'){

            if(typeof pirateShipStatus[commandNumber] !== "undefined"){
                
                let damageToRepair = Number(commands[2]);

                if (pirateShipStatus[commandNumber] + damageToRepair > maximumHealth) {
                    pirateShipStatus[commandNumber] = maximumHealth;
                  } else {
                    pirateShipStatus[commandNumber] = pirateShipStatus[commandNumber] += damageToRepair ;
                   
                  }
            }
            
        }else if(command == 'Status'){

            let isRepairNeeded = maximumHealth * 0.20;
            let repairsCount = 0;

           for(let i = 0; i < pirateShipStatus.length; i++){

            let currentIndex = pirateShipStatus[i];

            if(currentIndex < isRepairNeeded){
                repairsCount++
            }

           }
           console.log(`${repairsCount} sections need repair.`)
        }else{

            let pirateShipStatusSum = pirateShipStatus.reduce((a, b) => a + b);
            let warshipStatusSum = warshipStatus.reduce((a, b) => a + b);
        
            console.log(`Pirate ship status: ${pirateShipStatusSum}`+ '\n' + `Warship status: ${warshipStatusSum}`);
            break;
        }
    }
}

manOwar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);

/*manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);*/


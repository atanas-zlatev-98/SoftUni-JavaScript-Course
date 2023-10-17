function manOWar(arr){

    let pirate = arr.shift().split('>').map(Number);
    let warship = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let criticalHp = maxHealth * 0.20;

    for(let current of arr){
        let tokens = current.split(' ');
        let command = tokens.shift();

        if(command == 'Retire'){
            break;
        }else if(command == 'Fire'){

            let index = Number(tokens[0]);
            let damage = Number(tokens[1]);

            if(index < 0 || index >= warship.length){
                continue;
            }

            warship[index] -= damage;
            if(warship[index] <= 0){
                console.log(`You won! The enemy ship has sunken.`);
                return;
            }

        }else if(command == 'Defend'){

            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            let damage = Number(tokens[2]);

            if(start < 0 || start >= pirate.length || end < 0 || end >= pirate.length){
                continue;
            }

            for(let i = start; i<=end;i++){
                pirate[i] -= damage;

                if(pirate[i] <= 0){

                    console.log(`You lost! The pirate ship has sunken.`)
                    return;
                }
            }

        }else if(command == 'Repair'){

            let index = Number(tokens[0]);
            let hp = Number(tokens[1]);

            if(index < 0 || index >= pirate.length){
                continue;
            }

            pirate[index] += hp;
            if(pirate[index] > maxHealth){
                pirate[index] = maxHealth;
            }

        }else if(command == 'Status'){

            let damaged = pirate.filter(section => section < criticalHp);

            console.log(`${damaged.length} sections need repair`);

        }
    }


    let pirateStatus = 0;
    let warshipStatus =0;

    for(let section of pirate){
        pirateStatus += section
    }

    for(let section of warship){
        warshipStatus += section;
    }

    console.log(`Pirate ship status: ${pirateStatus}`+ '\n' + `Warship status: ${warshipStatus}`);

}

manOWar((["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]))
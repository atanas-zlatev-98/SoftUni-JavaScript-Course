function heroes(arr) {
    let n = Number(arr.shift());

    let heroes = {};

    for(let i = 0; i < n;i++){
        let currentHero = arr[i].split(' ');

        let[heroName,heroHealth,heroMana] = currentHero;
        heroHealth = Number(heroHealth);
        heroMana = Number(heroMana);

        heroes[heroName] ={
            health: heroHealth,
            mana: heroMana
        }

    }

    for(let i = 0; i<n;i++){
        arr.shift();
    }

    while(arr[0] !== 'End'){
        let currentCommand = arr[0].split(' - ');

        let [command,heroName,commandValue,attacker] = currentCommand;
        commandValue = Number(commandValue);

        if(command == 'Heal'){

            if(heroName in heroes){

                let getHP = heroes[heroName]['health'];

                if (getHP + commandValue > 100) {
                    let healedHP = 100 - getHP;
                    getHP = 100;
                    console.log(`${heroName} healed for ${healedHP} HP!`);
                    heroes[heroName]['health'] = getHP;
                  } else {
                    heroes[heroName]['health'] += commandValue;
                    console.log(`${heroName} healed for ${commandValue} HP!`);
                  }
            }

        }else if(command == 'Recharge'){

            let getMP = heroes[heroName]['mana'];

            if (getMP + commandValue > 200) {
                let healedMP = 200 - getMP;
               getMP = 200;
                console.log(`${heroName} recharged for ${healedMP} MP!`);
                heroes[heroName]['mana'] = getMP;
              } else {
                heroes[heroName]['mana'] += commandValue;
                console.log(`${heroName} recharged for ${commandValue} MP!`);
              }

        }else if(command == 'TakeDamage'){

            if(heroName in heroes){
                heroes[heroName]['health'] -= commandValue;
            }

            let getHealth = heroes[heroName]['health'];

            if(getHealth > 0){
                console.log(`${heroName} was hit for ${commandValue} HP by ${attacker} and now has ${getHealth} HP left!`);
            }else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }



        }else if(command == 'CastSpell'){

            if(heroName in heroes){
                let getMana = heroes[heroName]['mana'];

                if(getMana >= commandValue){
                    heroes[heroName]['mana'] -= commandValue;
                    let getNewHealth = heroes[heroName]['mana']
                    console.log(`${heroName} has successfully cast ${attacker} and now has ${getNewHealth} MP!`);
                }else {
                    console.log(`${heroName} does not have enough MP to cast ${attacker}!`);
                }
            }

        }



        arr.shift();
    }

    for(let [key,value] of Object.entries(heroes)){
       let hero = key;

       let [heroHp,heroMana] = Object.entries(value);

        console.log(hero);
        console.log(`HP: ${heroHp[1]}`);
        console.log(`MP: ${heroMana[1]}`);
    }

}
heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]
    );

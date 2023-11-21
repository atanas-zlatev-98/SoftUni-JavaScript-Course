function heroes(arr){
    let n = Number(arr.shift());

    let heroes = {};

    for(let i = 0;i < n;i++){
        let currentHero = arr[i].split(' ');

        let [heroName,health,mana] = currentHero;
        health = Number(health);
        mana = Number(mana);

        heroes[heroName] = {health,mana};
    }

    for(let i = 0;i<n;i++){
        arr.shift();
    }

    while(arr[0] !== 'End'){
        let currentCommand = arr[0].split(' - ');

        let command = currentCommand.shift();

        if(command == 'Heal'){

            let [heroName,hpAmount] = currentCommand;
            hpAmount = Number(hpAmount);

            let maxHp = 100;
            let getHeroHp = heroes[heroName]['health'];

            if(hpAmount + getHeroHp > maxHp){
                let difference = maxHp - getHeroHp;
                heroes[heroName]['health'] = 100;
                console.log(`${heroName} healed for ${difference} HP!`);
            }else{
                heroes[heroName]['health'] += hpAmount;
                console.log(`${heroName} healed for ${hpAmount} HP!`);
            }

        }else if(command == 'Recharge'){

            let [heroName,mpAmount] = currentCommand;
            mpAmount = Number(mpAmount);

            let maxMP = 200;
            let getHeroMp = heroes[heroName]['mana'];

            if(mpAmount + getHeroMp > maxMP){
                let difference = maxMP - getHeroMp;
                heroes[heroName]['mana'] = maxMP;
                console.log(`${heroName} recharged for ${difference} MP!`);
            }else {
                heroes[heroName]['mana'] += mpAmount;
                console.log(`${heroName} recharged for ${mpAmount} MP!`);
            }

        }else if(command == 'TakeDamage'){

            let [heroName,damage,attacker] = currentCommand;
            damage = Number(damage);

            heroes[heroName]['health'] -= damage;
            let getHeroHp = heroes[heroName]['health'];

            if(getHeroHp > 0){
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${getHeroHp} HP left!`)
            }else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                delete heroes[heroName];
            }

        }else if(command == 'CastSpell'){
            let [heroName,mpNeeded,spellName] = currentCommand;

            let getheroMp = heroes[heroName]['mana'];

            if(getheroMp >= mpNeeded){
                heroes[heroName]['mana'] -= mpNeeded;
                let newHeroMp = heroes[heroName]['mana'];
                console.log(`${heroName} has successfully cast ${spellName} and now has ${newHeroMp} MP!`)
            }else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }

        }
        arr.shift();
    }

    for(let [hero,heroStats] of Object.entries(heroes)){
       let [hp,mp] = Object.entries(heroStats);
       console.log(hero);
       console.log(`HP: ${hp[1]}`);
       console.log(`MP: ${mp[1]}`);
    }

}

heroes([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 100",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ]
    )
function inventory(arr){
    let heroes = [];

    for(let allHeroes of arr){
        let tokens = allHeroes.split(' / ');

        let [heroName,heroLevel,items] = tokens;

        heroLevel = Number(heroLevel);

        let hero = {
            heroName,
            heroLevel,
            items
        }
            heroes.push(hero);
       
    }
    heroes.sort((a,b)=> a.heroLevel - b.heroLevel);
    heroes.map(hero => {
        console.log(`Hero: ${hero.heroName}` + '\n' + `level => ${hero.heroLevel}` + '\n' + `items => ${hero.items}`)
    })
}

/*inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])*/
inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])

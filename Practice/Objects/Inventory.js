function inventory(arr){

    let heroes = [];

    for(let hero of arr){
        let [heroName,heroLevel,inventory] = hero.split('/');

        let currentHero = {
            name: heroName,
            level: heroLevel,
            items: inventory
        }

        heroes.push(currentHero);
    }

    let sortedHeroes = heroes.sort((a,b)=>a.level - b.level);

    for(let allHeroes of sortedHeroes){
        console.log(`Hero: ${allHeroes.name}`);
        console.log(`level =>${allHeroes.level}`);
        console.log(`items =>${allHeroes.items}`);
    }

}

inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    
    'Poppy / 28 / Sentinel, Antara'
    
    ])

function inventory(arr) {
    
  let party = [];

  for (let hero of arr) {
    let [heroName, heroLevel, items] = hero.split(" / ");

    hero  = {
        heroName,
      level: Number(heroLevel),
      items,
    };

    party.push(hero);
  }

  let sorted = party.sort((a,b) => a.level - b.level);

  for(let hero of sorted){
    console.log(`Hero: ${hero.heroName}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

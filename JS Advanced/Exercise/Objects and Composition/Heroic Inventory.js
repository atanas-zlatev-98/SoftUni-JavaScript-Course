function heroicInventory(arr) {
  let arrResult = [];

  for (let hero of arr) {
    //let currentHero = hero.split(" / ");
    let [heroName, heroLevel, items] = hero.split(" / ");

    if (items) {
      items = items.split(", ");
      let result = {
        name: heroName,
        level: Number(heroLevel),
        items: items,
      };
      arrResult.push(result);
    } else {
      let result = {
        name: heroName,
        level: Number(heroLevel),
        items: [],
      };
      arrResult.push(result);
    }
  }
  return JSON.stringify(arrResult);
}

/*console.log(heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]));*/

console.log(
  heroicInventory([
    "Isacc / 25",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);

function legendaryfarming(str) {
  let inventory = str.split(" ");

  let legendaries = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };
  let materials = { shards: 0, fragments: 0, motes: 0 };
  let junk = {};

  for (let i = 0; i < inventory.length; i += 2) {
    let quantity = Number(inventory[i]);
    let material = inventory[i + 1].toLowerCase();

    if (material in materials) {
      materials[material] += quantity;
      let legendaryWeapon = legendaries[material];
      if (materials[material] >= 250) {
        console.log(`${legendaryWeapon} obtained!`);
        materials[material] -= 250;
        break;
      }
    } else {
      if (material in junk) {
        junk[material] += quantity;
      } else {
        junk[material] = quantity;
      }
    }
  }

  let sortedMaterials = Object.entries(materials).sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0]));
  
  for(let [material,quantity] of sortedMaterials){
    console.log(`${material}: ${quantity}`);
  }

  let sortedJunk = Object.entries(junk).sort((a,b)=>a[0].localeCompare(b[0]));

  for(let [junkMaterial, junkQuantity] of sortedJunk){
    console.log(`${junkMaterial}: ${junkQuantity}`);
  }
}
//legendaryfarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryfarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
function legendaryFarming(str) {

  let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  let junkMaterials = {};

  let legendaries = {shards: 'Shadowmourne', fragments: 'Valanyr',motes: 'Dragonwrath'};

  let materialsArray = str.split(" ");

  for (let i = 0; i < materialsArray.length; i += 2) {
    let quantity = Number(materialsArray[i]);
    let material = materialsArray[i+1].toLowerCase();

    if(material in keyMaterials){
        keyMaterials[material] += quantity;

        if(keyMaterials[material] >= 250){

            let legendaryWon = legendaries[material];
            console.log(`${legendaryWon} obtained!`);

            keyMaterials[material] -= 250;
            break;

        }
    }else{

        if(material in junkMaterials){
            junkMaterials[material] += quantity
        }else {
            junkMaterials[material] = quantity;
        }
    }
  }
  let keyMaterialEntries = Object.entries(keyMaterials).sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0]));

  for(let[material, quantity] of keyMaterialEntries){
    console.log(`${material}: ${quantity}`);
  }

  let junkMaterialEntries = Object.entries(junkMaterials).sort((a,b)=>a[0].localeCompare(b[0]));

  for(let[material, quantity] of junkMaterialEntries){
    console.log(`${material}: ${quantity}`);
  }
}

//legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
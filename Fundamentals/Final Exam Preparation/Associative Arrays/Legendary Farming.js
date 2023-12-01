function legendaryFarming(arr) {
  let loot = arr.split(" ");
  let junk = {};
  let resources = { shards: 0, fragments: 0, motes: 0 };

  for (let i = 0; i < loot.length; i += 2) {
    let resourceQua = Number(loot[i]);
    let resource = loot[i + 1].toLowerCase();

    if (resources.hasOwnProperty(resource)) {

      resources[resource] += resourceQua;

      if (resources[resource] >= 250) {
        if (resource == "shards") {
          console.log(`Shadowmourne obtained!`);
          resources[resource] -= 250;
          break;
        } else if (resource == "fragments") {
          console.log(`Valanyr obtained!`);
          resources[resource] -= 250;
          break;
        } else if (resource == "motes") {
          console.log(`Dragonwrath obtained!`);
          resources[resource] -= 250;
          break;
        }
      }
    } else {
      if (junk.hasOwnProperty(resource)) {
        junk[resource] += resourceQua;
      } else {
        junk[resource] = resourceQua;
      }
    }
  }

  let sorted = Object.entries(resources).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  let sortedJunk = Object.entries(junk).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [resource, resourceQua] of sorted) {
    console.log(`${resource}: ${resourceQua}`);
  }

  for (let [resourceJunk, resourceJunkQua] of sortedJunk) {
    console.log(`${resourceJunk}: ${resourceJunkQua}`);
  }
}

//legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);

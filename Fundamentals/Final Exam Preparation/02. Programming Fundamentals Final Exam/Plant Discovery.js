function plantDiscovery(arr) {
  let n = Number(arr.shift());
  let plants = {};

  for (let i = 0; i < n; i++) {
    let currentPlant = arr[i].split("<->");

    let [plantName, rarity] = currentPlant;
    rarity = Number(rarity);

    plants[plantName] = {
      rarity,
      rating: 0,
      count: 0,
    };
  }

  for (let i = 0; i < n; i++) {
    arr.shift();
  }

  while (arr[0] !== "Exhibition") {
    let currentPlant = arr[0];

    if (currentPlant.includes("Rate")) {
      let tokens = currentPlant.split("Rate: ")[1];

      let commands = tokens.split(" - ");

      let [plantName, plantRating] = commands;
      plantRating = Number(plantRating);

      if (plantName in plants) {
        plants[plantName]["rating"] += plantRating;
        plants[plantName]["count"] += 1;
      } else {
        console.log("error");
      }
    } else if (currentPlant.includes("Update")) {
      let tokens = currentPlant.split("Update: ")[1];

      let commands = tokens.split(" - ");

      let [plantName, plantRarity] = commands;
      plantRarity = Number(plantRarity);

      if (plantName in plants) {
        plants[plantName]["rarity"] = plantRarity;
      } else {
        console.log("error");
      }
    } else if (currentPlant.includes("Reset")) {
      let plant = currentPlant.split("Reset: ")[1];

      if (plant in plants) {
        plants[plant]["rating"] = 0;
        plants[plant]["count"] = 0;
      } else {
        console.log("error");
      }
    }

    arr.shift();
  }

  console.log(`Plants for the exhibition:`);
  for (let [key, value] of Object.entries(plants)) {
    let averageScore = value["rating"] / value["count"] || 0;
    console.log(
      `- ${key}; Rarity: ${value["rarity"]}; Rating: ${averageScore.toFixed(2)}`
    );
  }
}

plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);

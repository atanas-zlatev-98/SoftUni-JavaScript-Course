function plantDiscovery(arr) {
  let n = arr.shift();

  let plants = {};

  for (let i = 0; i < n; i++) {
    let tokens = arr[i].split("<->");
    let [plant, rarity] = tokens;
    rarity = Number(rarity);

    plants[plant] = {plant,rarity,count: 0, rating: 0};
  }
  for(let i = 0; i < n;i++){
    arr.shift();
  }

  while(arr[0] !== 'Exhibition'){

    let currentPlant = arr[0];

    if(currentPlant.includes('Rate')){
        let tokens = currentPlant.split('Rate: ')[1];
        let currPlant= tokens.split(' - ');
        
        let [plantName,plantRating] = currPlant;
        plantRating = Number(plantRating);

        if(plants.hasOwnProperty(plantName)){
            plants[plantName]['rating'] += plantRating;
            plants[plantName]['count'] +=1;
        }else {
            console.log('error')
        }
    }else if(currentPlant.includes('Update')){
        let tokens = currentPlant.split('Update: ')[1];
        let currPlant = tokens.split(' - ');

        let [plantName,plantRarity] = currPlant;
        plantRarity = Number(plantRarity);

        if(plants.hasOwnProperty(plantName)){
            plants[plantName]['rarity'] = plantRarity;
        }else {
            console.log('error')
        }
    }else if(currentPlant.includes('Reset')){
        let plantName = currentPlant.split('Reset: ')[1];

        if(plants.hasOwnProperty(plantName)){
            plants[plantName]['rating'] = 0;
            plants[plantName]['count'] = 0;
        }else {
            console.log('error')
        }
    }
    arr.shift();  
}

  console.log(`Plants for the exhibition:`);

  for(let key in plants){
    let average = plants[key]['rating'] / plants[key]['count'] || 0;
    console.log(`- ${key}; Rarity: ${plants[key]['rarity']}; Rating: ${average.toFixed(2)}`);
  }
}

plantDiscovery((["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
);

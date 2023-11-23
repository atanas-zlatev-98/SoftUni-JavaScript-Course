function pirates(arr) {

  let cities = {};

  while (arr[0] !== "Sail") {
    let [cityName, cityPopulation, cityGold] = arr[0].split("||");
    cityPopulation = Number(cityPopulation);
    cityGold = Number(cityGold);

    if(cities.hasOwnProperty(cityName)){
        cities[cityName]['cityGold'] += cityGold;
        cities[cityName]['cityPopulation'] += cityPopulation;
    }else{
        cities[cityName] = {
            cityPopulation,
            cityGold,
          };
    }
    

    arr.shift();
  }

  while(arr[0] !== 'End'){
    let currentCommand = arr[0].split('=>');
    let command = currentCommand.shift();

    if(command == 'Plunder'){

        let [targetCity,kills,getGold] = currentCommand;

        cities[targetCity]['cityPopulation'] -= Number(kills);
        cities[targetCity]['cityGold'] -= Number(getGold);
        console.log(`${targetCity} plundered! ${getGold} gold stolen, ${kills} citizens killed.`);

        if(cities[targetCity]['cityPopulation'] == 0 ||  cities[targetCity]['cityGold'] == 0){
             console.log(`${targetCity} has been wiped off the map!`)
             delete cities[targetCity];
        }

    }else if(command == 'Prosper'){

        let [cityName,gold] = currentCommand;

        if(gold < 0){
            console.log("Gold added cannot be a negative number!")
        }else {
            cities[cityName]['cityGold'] += Number(gold);
            console.log(`${gold} gold added to the city treasury. ${cityName} now has ${ cities[cityName]['cityGold']} gold.`);
        }

    }
    arr.shift();
  }
  let wealthySettlements = Object.keys(cities).length;

  if(wealthySettlements > 0){
    console.log(`Ahoy, Captain! There are ${wealthySettlements} wealthy settlements to go to:`);
    for(let [city,citySettlements] of Object.entries(cities)){
        console.log(`${city} -> Population: ${citySettlements['cityPopulation']} citizens, Gold: ${citySettlements['cityGold']} kg`);
      }
  }else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
  }


}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
;

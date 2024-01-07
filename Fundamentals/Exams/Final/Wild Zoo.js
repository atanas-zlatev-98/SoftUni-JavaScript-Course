function wildZoo(arr){

    let animals = {};
    let animalAreas = {};

    while(arr[0] !== 'EndDay'){

        if(arr[0].startsWith('Add:')){

            let tokens = arr[0].split('Add: ')[1];
            let [animalName,foodQua,area] = tokens.split('-');

            foodQua = Number(foodQua);

            if(animalName in animals){
                animals[animalName]['foodQua'] += foodQua;
            }else {
                animals[animalName] = {foodQua,area}
              
                if(area in animalAreas){
                    animalAreas[area] += 1;
                }else {
                    animalAreas[area] = 1
                }
            }

        }else if(arr[0].startsWith('Feed:')){

            let tokens = arr[0].split('Feed: ')[1];

            let [animalName, foodQua] = tokens.split('-');
            foodQua = Number(foodQua)

            if(animalName in animals){

                animals[animalName]['foodQua'] -= foodQua;
                let getFoodLimit = animals[animalName]['foodQua'];

                if(getFoodLimit <= 0){

                    console.log(`${animalName} was successfully fed`)
                    let animalArea = animals[animalName]['area'];

                    if(animalArea in animalAreas){

                        animalAreas[animalArea] -= 1;

                        let getAreaAnimalsCount  = animalAreas[animalArea];

                        if(getAreaAnimalsCount <= 0 ){
                           delete animalAreas[animalArea]
                        }
                    }
            
                    delete animals[animalName];
                }
            }

        }

        arr.shift()
    }

    console.log(`Animals:`);
    for(let [animal,animalFood] of Object.entries(animals)){
        console.log(`${animal} -> ${animalFood['foodQua']}g`)
    }

    console.log(`Areas with hungry animals:`);
    for(let [area,count] of Object.entries(animalAreas)){
        console.log(`${area}: ${count}`);
    }

}

wildZoo(["Add: Adam-4500-ByTheCreek","Add: Maya-7600-WaterfallArea","Add: Maya-1230-WaterfallArea","Feed: Jamie-2000","EndDay"])
/*wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])*/

/*wildZoo(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])*/
function townPopulation(arr){

    let towns = {};

    for(let town of arr){

        let [townName,townPopulation] = town.split(' <-> ');
        townPopulation = Number(townPopulation);

        if(townName in towns){
            towns[townName] += townPopulation;
        }else {
            towns[townName] = townPopulation
        }
    }

    
    for(let [townName,townPopu] of Object.entries(towns)){
        console.log(`${townName} : ${townPopu}`);
    }

}

/*townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);*/

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
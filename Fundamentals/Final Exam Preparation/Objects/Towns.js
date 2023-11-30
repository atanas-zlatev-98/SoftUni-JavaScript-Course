function towns(arr){
    let cities = [];
    for(let towns of arr){

        let [town,latitude,longitude] = towns.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townTemplate ={town,latitude,longitude}
        cities.push(townTemplate);
    }

    for(let city of cities){
        console.log(city);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
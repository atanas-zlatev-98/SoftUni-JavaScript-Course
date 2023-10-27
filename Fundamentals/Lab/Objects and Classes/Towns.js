function towns(arr){

for(let town of arr){
    let [townName,lat,lng] = town.split(' | ');
    lat = Number(lat).toFixed(2);
    lng = Number(lng).toFixed(2);

    let townObj = {
        town: townName,
        latitude: lat,
        longitude: lng
    }

    console.log(townObj);

}

}

towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])
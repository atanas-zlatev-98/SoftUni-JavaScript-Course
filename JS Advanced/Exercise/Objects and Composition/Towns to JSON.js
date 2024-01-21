function townJSON(arr){
    let [town,latitude,longitude] = arr.shift().split('|').map(x=>x.trim()).filter(x=>x);
    let result = [];

    for(let el of arr){
       let [city,lat,lng] = el.split('|').map(x=>x.trim()).filter(x=>x);
        lat = Number(lat);
        lng = Number(lng);
        let towns = {
            [`${town}`]: city,
            [`${latitude}`]: Number((lat).toFixed(2)),
            [`${longitude}`]: Number((lng).toFixed(2)),
        }
        result.push(towns)
    }

    console.log(JSON.stringify(result))

}
townJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
function town(arr){

    for(let i = 0;i < arr.length;i++){

        let [townName,lat,lng] = arr[i].split(' | ');

        lat = Number(lat).toFixed(2);
        lng = Number(lng).toFixed(2);

         let town={
            town: townName,
            latitude: lat,
            longitude: lng,
         }

         console.log(town);

    }
}

town(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])
town(['Plovdiv | 136.45 | 812.575']);
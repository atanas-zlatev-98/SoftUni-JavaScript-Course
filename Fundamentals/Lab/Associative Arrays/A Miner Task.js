function minerTask(arr){

    let resources = {};

    for(let i = 0; i < arr.length;i += 2){
        let resource = arr[i];
        let resourceQuantity = Number(arr[i+1]);

        if(resource in resources){
            resources[resource] += resourceQuantity;
        }else {
            resources[resource] = resourceQuantity;
        }

    }

    for(let [key,entry] of Object.entries(resources)){
        console.log(`${key} -> ${entry}`);
    }

}

minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])
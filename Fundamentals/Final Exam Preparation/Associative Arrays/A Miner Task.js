function aMinerTask(arr){
    let resources = {};
    for(let i = 0; i < arr.length;i += 2){
        let resource = arr[i];
        let resourceQua = Number(arr[i + 1]);

        if(resources.hasOwnProperty(resource)){
            resources[resource] += resourceQua;
        }else {
            resources[resource] = resourceQua
        }
    }

    for(let [resource, resourceQua] of Object.entries(resources)){
        console.log(`${resource} -> ${resourceQua}`);
    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )

function rotation(arr,rotation){

    for(let i = 1; i<= rotation;i++){
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));



}

rotation([51, 47, 32, 61, 21], 2)
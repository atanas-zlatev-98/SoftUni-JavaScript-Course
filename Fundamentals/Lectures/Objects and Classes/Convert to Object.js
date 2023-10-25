function strToObj(str){

    let parse = JSON.parse(str);

    for( let [key,value] of Object.entries(parse)){ 
        console.log(`${key}: ${value}`);
    }
    

}

strToObj('{"name": "George", "age": 40, "town": "Sofia"}');
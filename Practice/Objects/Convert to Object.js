function convert(str){

    let convert = JSON.parse(str);

    for(let [key,value] of Object.entries(convert)){
        console.log(`${key}: ${value}`);
    }

}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
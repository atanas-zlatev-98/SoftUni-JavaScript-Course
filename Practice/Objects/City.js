function city(obj){

    let kvps = Object.entries(obj);

    for(let key of kvps){
        let [keys,prop] = key;
        console.log(`${keys} -> ${prop}`);
    }

}

city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })
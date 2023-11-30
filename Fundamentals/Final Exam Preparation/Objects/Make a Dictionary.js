function dictonary(arr){

    let dictonary = {};
    for(let term of arr){
        let currentTerm = JSON.parse(term);
        
        for(let [key,value] of Object.entries(currentTerm)){
            dictonary[key] = value;

            if(dictonary.hasOwnProperty(key)){
                dictonary[key] = value
            }
        }
         
    }

    let sort = Object.entries(dictonary).sort((a,b) => a[0].localeCompare(b[0]))
    sort.map((term) =>  console.log(`Term: ${term[0]} => Definition: ${term[1]}`));
}

dictonary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
    ])
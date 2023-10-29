function dictionary(arr){

    let newDictonary = {};

    for(let elements of arr){
       let obj =  JSON.parse(elements);
       newDictonary = Object.assign(newDictonary,obj);
    }

    let sorted = Object.keys(newDictonary).sort((a,b)=> a.localeCompare(b));

    for(let terms of sorted){
        let term = terms;
        let definition = newDictonary[terms];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
   
}

dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
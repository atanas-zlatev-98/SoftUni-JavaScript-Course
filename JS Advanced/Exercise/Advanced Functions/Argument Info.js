function argumentInfo(...input){

    let count = {};

    for(let inputType of input){
        let currInputType = typeof inputType;
        
        console.log(`${currInputType}: ${inputType}`);

        if(currInputType in count){
            count[currInputType] += 1;
        }else {
            count[currInputType] = 1;
        }
       
    }

    let sorted = Object.entries(count).sort((a,b)=> b[1] - a[1]);

    for(let [key,value] of sorted){
            console.log(`${key} = ${value}`);
    }

}

argumentInfo({ name: 'bob'}, 3.333, 9.999)
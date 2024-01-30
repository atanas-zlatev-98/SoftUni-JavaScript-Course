function argumentInfo(...data){
let res = {};

for(let el of data){
    let type = typeof(el);
    console.log(`${type}: ${el}`);

    if(!res.hasOwnProperty(type)){
        res[type] = 0;
    }

    res[type] += 1;
}

let sorted = Object.entries(res).sort((a,b)=> b[1] - a[1]);

for(let [key,value] of sorted){
    console.log(`${key} = ${value}`);
}

}


argumentInfo({ name: 'bob'}, 3.333, 9.999)
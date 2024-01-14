function listOfNames(arr) {
    let idx= 1;
    let sorted = arr.sort((a,b) => a.localeCompare(b))

    for(let names of sorted){
        console.log(`${idx++}.${names}`);
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

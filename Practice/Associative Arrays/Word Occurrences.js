function wordOccurrences(arr){

    let words = {};

    for(let i = 0; i < arr.length;i++){

        if(arr[i] in words){
            words[arr[i]] += 1;
        }else {
            words[arr[i]] = 1;
        }
    }

    let sorted = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for(let [word,count] of sorted){
        console.log(`${word} -> ${count} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])
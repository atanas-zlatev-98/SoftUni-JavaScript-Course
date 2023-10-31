function wordOccurrences(arr){

    let map = new Map();

    for(let i = 0; i < arr.length;i++){
        let currentWord = arr[i];

        let wordCounter = 0;

        for(let j = i; j< arr.length;j++){
            let sameWord = arr[j];
            if(currentWord == sameWord){
                wordCounter++;
            }

        }

       if(!map.has(currentWord)){
        map.set(currentWord,wordCounter);
       }
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for(let [word, count] of sorted){
        console.log(`${word} -> ${count} times`);
    }

}

//wordOccurrences(["Here", "is", "the", "first", "sentence","Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
wordOccurrences(["dog", "bye", "city", "dog", "dad","boys", "ginger"]);
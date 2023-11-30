function wordTracker(arr){
    let sentence = arr.shift().split(' ');

    let words = {};

    for(let i = 0;i<sentence.length;i++){
        let currentWord = sentence[i];
        words[currentWord] = 0;
       
        for(let i = 0;i< arr.length;i++){
            let word = arr[i]
            if(currentWord == word){
                words[currentWord] += 1;
            }
        }
    }

    let sorted = Object.entries(words).sort((a,b)=> b[1] - a[1]);

    for(let [key,value] of sorted){
        console.log(`${key} - ${value}`);
    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence','sentence','sentence','sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )

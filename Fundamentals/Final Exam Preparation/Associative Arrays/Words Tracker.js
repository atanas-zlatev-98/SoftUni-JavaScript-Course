function wordTracker(arr){

    let sentence = arr.shift().split(' ');
    let words = {};

    for(let i = 0;i < sentence.length;i++){
        
        let sentenceWord = sentence[i].toLowerCase();

        words[sentenceWord] = 0;

        for(let k = 0;k < arr.length;k++){

            let identicalWord = arr[k].toLowerCase();
            
            if(sentenceWord == identicalWord){
                words[sentenceWord] += 1;
            }
        }

    }
    let sorted = Object.entries(words).sort((a,b) => b[1] - a[1]);
    
    for(let [word,count] of sorted){
        console.log(`${word} - ${count}`);
    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )
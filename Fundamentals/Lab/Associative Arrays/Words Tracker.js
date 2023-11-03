function wordsTracker(arr){

    let sentence = arr.shift().split(" ");
    let occurrences = {};

    for(let word of sentence){
        occurrences[word] = 0;
    }

    for(let matchWords of arr){
        if(occurrences.hasOwnProperty(matchWords)){
            occurrences[matchWords] += 1;
        }
    }

    let sorted = Object.entries(occurrences).sort((a,b) => b[1] - a[1]);

    for(let [word,occurance] of sorted){
        console.log(`${word} - ${occurance}`);
    }

}

wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])
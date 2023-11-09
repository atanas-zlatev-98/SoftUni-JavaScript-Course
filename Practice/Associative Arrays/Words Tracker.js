function wordsTracker(arr) {

  let sentence = arr.shift().split(" ");

  let occurances = {};

  for(let word of sentence){
    occurances[word] = 0;
  }

  for(let matchWord of arr){
    if(occurances.hasOwnProperty(matchWord)){
        occurances[matchWord] += 1;
    }
  }

  let sorted = Object.entries(occurances).sort((a, b) => b[1] - a[1]);

  for (let [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}
wordsTracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);

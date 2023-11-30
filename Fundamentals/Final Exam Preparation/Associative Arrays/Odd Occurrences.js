function oddOccurances(str){
    let words = str.split(' ');

    let word = new Map();
    
    for(let i = 0; i < words.length;i++){
        let currentWord = words[i].toLowerCase();
        let counter = 0;

        for(let k = 0;k< words.length;k++){
            let newCurrentWord = words[k].toLowerCase();

            if(currentWord == newCurrentWord){
                counter++;
            }
        }

        word.set(currentWord,counter);
    }
let arr = [];
    for(let [key,value] of word){

        if(value % 2 !== 0){
            arr.push(key);
        }
        
    }

    console.log(arr.join(' '));

}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
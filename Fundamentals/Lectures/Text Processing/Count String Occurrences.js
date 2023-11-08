function count(str,keyword){
    let arr = str.split(' ');
    let count = 0;
   
    for(let word of arr){
        if(word == keyword){
            count++
        }
    }

    console.log(count);

}

count('This is a word and it also is a sentence', 'is');
count('softuni is great place for learning new programming languages','softuni');
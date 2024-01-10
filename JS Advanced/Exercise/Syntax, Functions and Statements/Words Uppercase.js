function wordsUpperCase(str){

    let pattern = /\w+/g;

    let match = str.match(pattern);

    if(match){
       let newArr = match.map((word) => word.toUpperCase());
       console.log(newArr.join(', '));
    }
}

wordsUpperCase('Hi, how are you?');
wordsUpperCase('hello');
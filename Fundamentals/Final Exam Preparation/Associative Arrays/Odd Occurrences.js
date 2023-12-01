function oddOccurrences(str){

    let words = str.split(' ').map((x) => x.toLowerCase());
    let occurrences = {};

    for(let i = 0; i < words.length;i++){
        let currentWord = words[i];

        if(occurrences.hasOwnProperty(currentWord)){
            occurrences[currentWord] += 1;
        }else {
            occurrences[currentWord] = 1;
        }

    }

    let sorted = Object.entries(occurrences).sort((a,b) => b[1] - a[1]).filter((x) => x[1] % 2 !== 0);

    let bufferWords = '';
    for(let value of Object.values(sorted)){
        bufferWords += ` ${value[0]}`
    }
    
    console.log(bufferWords);

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
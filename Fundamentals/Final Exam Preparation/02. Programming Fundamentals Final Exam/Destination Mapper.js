function destinationMapper(str){

    let pattern = /([=|\/])([A-Z][A-Za-z]{2,})\1/g;

    let match = str.match(pattern);
    let travelPoints = 0;
    let destinations = [];

    if(match){

        for(let word of match){
            let cleanWord = word.slice(1,word.length - 1);
            destinations.push(cleanWord);
            travelPoints += cleanWord.length;
        }
    }

    let arrAsStr = destinations.join(', ');
    console.log(`Destinations: ${arrAsStr}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper('ThisIs some InvalidInput')
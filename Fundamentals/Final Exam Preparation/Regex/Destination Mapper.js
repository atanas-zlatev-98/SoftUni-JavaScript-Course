function destinationMapper(str){

    let message = str;

    let pattern = /([=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let match = pattern.exec(message);
    let travelPoints = 0;
    let destinations = [];

    while(match !== null){

        let {destination} = match.groups;

        destinations.push(destination);
        travelPoints += destination.length;
        
        match = pattern.exec(message);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
function race(arr){

    let participants = arr.shift().split(', ');
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /\d/g;

    let winners = {};

    while(arr[0] !== 'end of race'){

        let currentParticipant = arr[0];

        let nameMatch = currentParticipant.match(namePattern);
        let distance = currentParticipant.match(distancePattern);
       

        if(nameMatch && distance){

            nameMatch = nameMatch.join('');
            distance = distance.map(Number).reduce((a,b) => a+b);

            if(participants.includes(nameMatch)){
                if(nameMatch in winners){
                    winners[nameMatch] += distance;
                }else {
                    winners[nameMatch] = distance
                }
            }
        }

        arr.shift();
    }

    let sorted = Object.entries(winners).sort((a,b) => b[1]- a[1]);
   
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);

}

race(['Ronald, Bill, Tom, Timmy,Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);
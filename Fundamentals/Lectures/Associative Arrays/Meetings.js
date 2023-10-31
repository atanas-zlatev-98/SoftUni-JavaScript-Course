function meetings(arr){

    let meeting = {};

    for(let meet of arr){
        let [weekDay,name] = meet.split(' ');

        if(meeting.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
            continue;
        }

        console.log(`Scheduled for ${weekDay}`);
        meeting[weekDay] = name;
    }

    for(let [day,name] of Object.entries(meeting)){
        console.log(`${day} -> ${name}`);
    }
}

/*meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])*/

meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])
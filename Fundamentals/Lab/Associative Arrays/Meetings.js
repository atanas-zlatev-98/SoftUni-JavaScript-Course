function meetings(arr){

    let meetings = {};

    for(let meet of arr){
        let [day,name] = meet.split(' ');

        if(meetings.hasOwnProperty(day)){

            console.log(`Conflict on ${day}!`)

        }else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let [day,name] of Object.entries(meetings)){
        console.log(`${day} -> ${name}`);
    }

}

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

)
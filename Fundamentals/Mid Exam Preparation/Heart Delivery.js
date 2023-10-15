function delivery(arr){

    let neighbourhood = arr.shift().split('@').map(Number);

    let command = arr.shift();
    let currentIndex = 0;
    let success = true;
    let failsCount = 0;

    while(command !== 'Love!'){

        let commands = command.split(' ');

        let length = Number(commands[1]);

        currentIndex += length;

        if(currentIndex >= neighbourhood.length){
            currentIndex = 0;
        }

        if(neighbourhood[currentIndex] === 0){
            console.log(`Place ${currentIndex} already had Valentine's day.`)
        }else {
            neighbourhood[currentIndex] -= 2;
            if(neighbourhood[currentIndex] === 0){
                console.log(`Place ${currentIndex} has Valentine's day.`)
            }
        }

        command = arr.shift();


    }

    for(let i = 0; i< neighbourhood.length;i++){
        if(neighbourhood[i] !==0){
            success = false;
            failsCount++;
        }
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    if(success){
        console.log(`Mission was successful.`)
    }else{
        console.log(`Cupid has failed ${failsCount} places.`);
    }

}

delivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);

/*delivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])*/


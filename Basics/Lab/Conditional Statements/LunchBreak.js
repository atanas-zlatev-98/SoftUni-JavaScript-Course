function lunchBreak(input){
    let serialName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength / 8;
    let otdihTime = breakLength / 4;

    let timeLeft = breakLength - lunchTime - otdihTime;

    if(timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`)
    }else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`)
    }

}
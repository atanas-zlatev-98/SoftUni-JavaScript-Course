function swimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let timeToSwimDistance = distance * timePerMeter;

    let delay = Math.floor(distance / 15) * 12.5;

    let totalTime = timeToSwimDistance + delay;


    if(totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    }else{
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }

}
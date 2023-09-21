function fishTank(input){
    let tanklength = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankHeight = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let tankVolume = tanklength * tankWidth * tankHeight;

    let tankVolumeLiters = tankVolume / 1000;

    let litersNeeded = tankVolumeLiters * (1 - percent);
    console.log(litersNeeded);

}
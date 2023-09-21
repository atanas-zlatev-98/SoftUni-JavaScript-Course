function sumSeconds(input) {
    let contestantOne = Number(input[0]);
    let contestantTwo = Number(input[1]);
    let contestantThree = Number(input[2]);

    let time = contestantOne + contestantTwo + contestantThree;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    }else {
        console.log(`${minutes}:${seconds}`)
    }

}
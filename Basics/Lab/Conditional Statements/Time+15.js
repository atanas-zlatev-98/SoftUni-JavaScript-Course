function time(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeToAdd = 15;
    let addTime = minutes + timeToAdd;

    if (addTime > 59) {
        hours += 1;
        addTime = addTime - 60;
    }

    if (hours > 23) {
        hours = Math.abs(hours - 24);
    }

    if (addTime < 10) {
        console.log(`${hours}:0${addTime}`);
    } else {
        console.log(`${hours}:${addTime}`);
    }

}
function inTime(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveTimeHour = Number(input[2]);
    let arriveTimeMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arriveTime = arriveTimeHour * 60 + arriveTimeMinute;

    let difference = Math.abs(examTime - arriveTime);
    let h = Math.floor(difference / 60);
    let min = difference % 60;

    if (arriveTime < examTime && (examTime - arriveTime > 30)) {
        console.log('Early');
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (arriveTime <= examTime) {
        console.log('On time');
        if (min > 0) {
            console.log(`${min} minutes before the start`);
        }

    } else {
        console.log('Late');
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        }else {
            console.log(`${min} minutes after the start`);
        }
    }
}

inTime(["9","30","9","50"]);
inTime(["9","00","8","30"]);
inTime(['16','00','15','00']);
inTime(["9", "00", "10", "30"]);
inTime(["14", "00", "13", "55"]);
inTime(['11','30','8','12']);
inTime(["10", "00", "10", "00"]);
inTime(["11", "30", "10", "55"]);
inTime(['11','30','12','29']);
function validation(arr){

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];


    const checkDistanceFirst = (x1,y1) => Math.sqrt((x1 ** 2) + (y1 ** 2));
    const checkDistanceSecond = (x2,y2) => Math.sqrt((x2 ** 2) + (y2 **2));
    const checkDistance = (x1,y1,x2,y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);


    const firstCheck = checkDistanceFirst(x1,y1);
    const secondCheck = checkDistanceSecond(x2,y2);
    const thirdCheck = checkDistance(x1,y1,x2,y2);

    if (firstCheck === Math.trunc(firstCheck)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(secondCheck === Math.trunc(secondCheck)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (thirdCheck === Math.trunc(thirdCheck)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validation([2, 1, 1, 1])
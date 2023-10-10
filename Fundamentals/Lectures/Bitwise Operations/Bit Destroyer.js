function bitDestroyer(number,position){

    let mask = 1 << position;
    mask = ~mask;

    let result = number & mask;

    console.log(result);


}

bitDestroyer(1313,5)


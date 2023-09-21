function twoKeyPlusOne(input) {
    let number = Number(input[0]);
    let index = 1;

    while (index <= number) {
        console.log(index);
        index = 2 * index + 1;
    }
}

twoKeyPlusOne(['8']);
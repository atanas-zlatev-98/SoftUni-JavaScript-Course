function rotateArray(arr,rotateN) {

    for(let i = 1;i <= rotateN;i++){
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));

}
rotateArray(["1", "2", "3", "4"],2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

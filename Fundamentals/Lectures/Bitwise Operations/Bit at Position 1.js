function bitAtPosition(number){
let shiftedNumber = number >> 1;
let lsb = shiftedNumber & 1;
console.log(lsb);
}

bitAtPosition(51);
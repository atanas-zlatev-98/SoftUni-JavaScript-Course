function rounding(number,precision){
    if(precision > 15){
        precision = 15;
    }

    let fixedNumber = parseFloat(number.toFixed(precision));

    console.log(fixedNumber);

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);






















/*function rounding(number, precision) {
  
    if (precision > 15) {
    precision = 15;
    }
    
    let fixedNumber = number.toFixed(precision);

    console.log(parseFloat(fixedNumber));

}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);*/

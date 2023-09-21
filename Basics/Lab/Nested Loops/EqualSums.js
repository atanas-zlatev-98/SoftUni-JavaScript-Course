function equalSums(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
   let buffer = '';
    for (let i = startInterval; i <= endInterval; i++) {
        let numsAsString = String(i);
        let sumEvenPosition = 0;
        let sumOddPosition = 0;

        for (let charPosition = 0; charPosition < numsAsString.length; charPosition++) {
           
            if(charPosition % 2 === 0){
            sumEvenPosition += Number(numsAsString[charPosition]);
           }else {
            sumOddPosition += Number(numsAsString[charPosition]);
           }
        }
        if( sumEvenPosition === sumOddPosition){
            buffer += numsAsString + ' ';
        }
    }
    console.log(buffer);

}

equalSums(['100000', '100050']);
equalSums(['123456', '124000']);
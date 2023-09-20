function specialNumbers(number){

    for(let i = 1; i <= number;i++){

        let currentIndex = i;
        let sum = 0;

        while(currentIndex > 0 ){

            sum += currentIndex % 10;
            currentIndex = Math.trunc(currentIndex / 10);

        }

        if(sum === 5 || sum ===7 || sum === 11){
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
       
    }
}
specialNumbers(15);
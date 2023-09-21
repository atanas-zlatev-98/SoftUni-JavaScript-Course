function bonusPoins(input){
    let points =Number(input[0]);

    let bonusPoins = 0;

    if(points <= 100) {
        bonusPoins += 5;
    }else if(points > 100 && points < 1000) {
        bonusPoins = points * 0.20;
    }else{
        bonusPoins = points * 0.10;
    } 

    
    if(points % 2 == 0 ){
        bonusPoins = bonusPoins + 1;
    }else if(points % 10 == 5) {
        bonusPoins = bonusPoins + 2;
    }


    console.log(bonusPoins);
    console.log(points + bonusPoins);
}
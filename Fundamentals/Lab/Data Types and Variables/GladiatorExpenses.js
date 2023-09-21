function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice){

   let isHelmBroken = 0;
   let isSwordBroken = 0;
   let isShieldBroken = 0;
   let isArmorBroken = 0;

   let counter = 0;

   for(let i = 0;i < lostFights;i++){
    counter++;

    if(counter == 2){
        isHelmBroken++;
    }else if(counter ==3){
        isSwordBroken++;
    }

   }

}

gladiatorExpenses(7);
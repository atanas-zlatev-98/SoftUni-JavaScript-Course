function depositCalc(input){

    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualIncreaseRate = (Number(input[2]) / 100);
    
    let total = depositSum + depositTime * ((depositSum * annualIncreaseRate) / 12);
    
    console.log(total);
    
  }
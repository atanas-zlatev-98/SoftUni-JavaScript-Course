function supplies(input){

    let packagePens = Number(input[0]);
    let packageMarkers = Number(input[1]);
    let litersOfCleaner = Number(input[2]);
    let discount = (Number(input[3]) / 100);
    
    let priceOfPens = packagePens * 5.80;
    let priceOfMarkers = packageMarkers * 7.20;
    let priceOfCleaner = litersOfCleaner * 1.20;
    
    let sum = priceOfPens + priceOfMarkers + priceOfCleaner;
    let sumWithDiscount = sum - (sum * discount);
    
    console.log(sumWithDiscount);
    
  }
function guineaPig(arr) {
  
  let quantityFood = Number(arr[0] * 1000);
  let quantityHay = Number(arr[1] * 1000);
  let quantityCover = Number(arr[2] * 1000);
  let guineaWeight = Number(arr[3] * 1000);

  let daysOfMonth = 30;

  let dayCounter = 0;

  for (let i = 1; i <= daysOfMonth; i++) {
    dayCounter++;
    quantityFood -= 300;

    if (quantityFood <= 0 || quantityHay <= 0 || quantityCover <= 0) {
      break;
    }

    if (dayCounter % 2 == 0) {
      let hay = quantityFood * 0.05;
      quantityHay -= hay;
    }

    if (dayCounter % 3 == 0) {
      let cover = guineaWeight / 3;
      quantityCover -= cover;
    }

  }

  let foodInKg = quantityFood / 1000;
  let hayInKg = quantityHay / 1000;
  let coverInKg = quantityCover / 1000;

  if(foodInKg > 0 && hayInKg > 0 && coverInKg > 0){
    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);
  }else {
    console.log(`Merry must go to the pet store!`)
  }
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1","1.5","3","1.5"]);
guineaPig((["9","5","5.2","1"]));

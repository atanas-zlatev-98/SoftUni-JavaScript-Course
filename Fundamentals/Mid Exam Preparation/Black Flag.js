function blackFlag(arr) {

  let daysOfPlunder = Number(arr[0]);
  let dailyPlunder = Number(arr[1]);
  let expectedPlunder =Number(arr[2]);

  let gatheredPlunder = 0;

  let daysCounter = 1;

  for (let i = 1; i <= daysOfPlunder; i++) {

    gatheredPlunder += dailyPlunder;

    if(daysCounter % 3 === 0){
        let morePlunder = dailyPlunder * 0.5;
        gatheredPlunder += morePlunder;
    }
    if(daysCounter % 5 === 0){
        gatheredPlunder -= gatheredPlunder * 0.3;
    }

    daysCounter++;
  }

  if(gatheredPlunder >= expectedPlunder){
    console.log(`Ahoy! ${gatheredPlunder.toFixed(2)} plunder gained.`);
  }else if(gatheredPlunder < expectedPlunder){
    let percentagePlunder = (gatheredPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentagePlunder.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["10",
"20",
"380"])


function bitcoinMining(days) {
  let daysCounter = 0;
  let goldFarmed = days[0];

  let goldPrice = 67.51;
  let bitcoinPrice = 11949.16;

  let firstBuy = 0;

  let money = 0;
  let bitcoins = 0;

  for (let i = 0; i < days.length; i++) {

    goldFarmed = days[i];
    daysCounter++;

    if (daysCounter % 3 === 0) {
      goldFarmed = goldFarmed - goldFarmed * 0.3;
    }

    money += goldFarmed * goldPrice;

    while (money >= bitcoinPrice) {

      money -= bitcoinPrice;
      bitcoins++;

      if (bitcoins === 1) {
        firstBuy = daysCounter;
      }
      
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);

  if (firstBuy !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBuy}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

//bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
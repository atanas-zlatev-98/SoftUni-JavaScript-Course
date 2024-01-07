function cookieMasterclass(arr) {

  let budget = Number(arr[0]);
  let students = Number(arr[1]);
  let flourPricePerPackage = Number(arr[2]);
  let eggPrice = Number(arr[3]);
  let apronPrice = Number(arr[4]);

  let freePackages = 0;

  for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
        freePackages++;
      }
    }


  let moreApron = students * 0.2;

  if (moreApron < 1) {
    moreApron = 1;
  }


  let apronPriceCalc = apronPrice * (students + Math.round(moreApron));
  let eggPriceCalc = eggPrice * 10 * students;
  let flourPriceCalc = flourPricePerPackage * (students - freePackages);

  let totalSum = apronPriceCalc + eggPriceCalc + flourPriceCalc;

  if (totalSum > budget) {
    
    console.log(`${(totalSum - budget).toFixed(2)}$ more needed.`);
  } else {
    console.log(`Items purchased for ${totalSum.toFixed(2)}$.`);
  }

}

cookieMasterclass([50, 2, 1.0, 0.1, 10.0]);
cookieMasterclass([100,25,4.0,1.0,6.0]);
cookieMasterclass([946,20,12.05,0.42,27.89]);

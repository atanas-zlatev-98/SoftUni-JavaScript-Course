function modification(number) {
    let numAsString = String(number);
    let counter = 0;
    let sum = 0;
  
    for (let i = 0; i <= numAsString.length; i++) {
      counter++;
      sum += Number(numAsString[i]);
  
      if (sum / counter < 5) {
        if (counter >= numAsString.length) {
          numAsString += "9";
        }
      } else {
        break;
      }
    }
    console.log(numAsString);
  }
modification(101);
//modification(5835);

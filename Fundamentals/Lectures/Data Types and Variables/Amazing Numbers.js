function amazingNumbers(number) {
  let numAsString = String(number);

  let buffer = 0;

  for (let i = 0; i < numAsString.length; i++) {
    buffer += Number(numAsString[i]);
  }

  let bufferCheck = String(buffer);
  for (let i = 0; i < bufferCheck.length; i++) {
    if (bufferCheck[i] == 9) {
      console.log(`${numAsString} Amazing? True`);
      break;
    } else {
      console.log(`${numAsString} Amazing? False`);
      break;
    }
  }
}

//amazingNumbers(1233);
amazingNumbers(999);

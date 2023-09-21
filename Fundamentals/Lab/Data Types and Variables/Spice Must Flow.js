function spiceMustFlow(currentYield) {
  //initialize result variable
  let spice = 0;
  let days = 0;

  //each day check if source is profitable
  while (currentYield >= 100) {
    // mine yield and add to result
    // reduce yield
    // consume spice
    days++;
    spice += currentYield - 26;
    currentYield -= 10;
  }

  // at the end of operation, consume spice
  if (spice >= 26) {
    spice -= 26;
  }
  //print result

  console.log(days);
  console.log(spice);
}

spiceMustFlow(111); // 2 - 134
spiceMustFlow(450); // 36 - 8938

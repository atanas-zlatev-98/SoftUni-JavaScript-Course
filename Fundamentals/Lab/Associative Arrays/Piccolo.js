function piccolo(arr) {
  let obj = new Map();

  for (let i = 0; i < arr.length; i++) {
    let [direnction, carNumber] = arr[i].split(", ");

    if (direnction == "IN") {
      obj.set(carNumber);
    } else if (direnction == "OUT") {
      if (obj.has(carNumber)) {
        obj.delete(carNumber);
      }
    }
  }

  let sorted = Array.from(obj).sort();

  if (sorted.length <= 0) {
    console.log(`Parking Lot is Empty`);
    return;
  }

  for (let carNumber of sorted) {
    console.log(carNumber.join(" "));
  }
}

/*piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);*/

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])
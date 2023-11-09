function piccolo(arr) {
  let parkingLot = {};
  for (let parking of arr) {
    let [direction, carNumber] = parking.split(", ");

    if (direction == "IN") {
      parkingLot[carNumber] = carNumber;
    } else if (direction == "OUT") {
      if (parkingLot.hasOwnProperty(carNumber)) {
        delete parkingLot[carNumber];
      }
    }
  }

  let sorted = Object.entries(parkingLot).sort();

  if (sorted.length > 0) {
    for (let [cars, carNumber] of sorted) {
      console.log(`${carNumber}`);
    }
  } else {
    console.log(`Parking Lot is Empty`);
  }
}

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);

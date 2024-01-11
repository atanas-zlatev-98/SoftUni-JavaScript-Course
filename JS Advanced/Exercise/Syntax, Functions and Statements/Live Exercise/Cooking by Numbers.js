function cookingByNumbers(numAsString, ...op) {

  let operationEnum = {
    chop: (num) => num / 2,
    dice: (num) => (num = Math.sqrt(num)),
    spice: (num) => (num += 1),
    bake: (num) => num * 3,
    fillet: (num) => num -= num * 0.2
  };

  let num = Number(numAsString);

  op.forEach((el) => {
    num = operationEnum[el](num);
    console.log(num);
  });
}
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");

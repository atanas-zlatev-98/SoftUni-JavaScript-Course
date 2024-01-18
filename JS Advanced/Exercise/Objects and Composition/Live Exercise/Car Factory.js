function carFactory(car) {
  const engineEnum = {
    "SmallEngine": { power: 90, volume: 1800 },
    "NormalEngine": { power: 120, volume: 2400 },
    "MonsterEngine": { power: 200, volume: 3500 },
  };

  let result = {
    model: car.model,
    engine: undefined,
    carriage: undefined,
    wheels: undefined,
  };

  if (car.power <= 90) {
    result.engine = engineEnum.SmallEngine;
  } else if (car.power <= 120) {
    result.engine = engineEnum.NormalEngine;
  } else {
    result.engine = engineEnum.MonsterEngine;
  }

  if (car.carriage === "hatchback") {
    result.carriage = { type: "hatchback", color: car.color };
  } else {
    result.carriage = { type: "coupe", color: car.color };
  }

  let wheelSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
  result.wheels = new Array(4).fill(wheelSize);
  return result;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

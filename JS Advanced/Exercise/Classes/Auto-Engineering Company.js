function autoEngineeringCompany(arr) {
  let cars = new Map();

  for (let car of arr) {
    let [carBrand, carModel, carsProduced] = car.split(" | ");

    if (!cars.has(carBrand)) {
      cars.set(carBrand, new Map());
    }
    
    let models = cars.get(carBrand);
    if(!models.has(carModel)){
        models.set(carModel,0);
    }

    models.set(carModel, models.get(carModel) + Number(carsProduced));
  }

  for (const brand of cars.keys()) {
    console.log(brand);
    let models = cars.get(brand);
    for (const model of models.keys()) {
        console.log(`###${model} -> ${models.get(model)}`);
    }
}
}

autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);

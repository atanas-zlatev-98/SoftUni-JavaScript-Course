function cars(arr) {
    let data = {};
  
    const createCar = {
      create,
      set,
      print,
    };
  
    function create(carName, inherits, carNameTwo) {
      data[carName] = inherits ? Object.create(data[carNameTwo]) : {}
    }
  
    function set(carName, carColor, color) {
      data[carName][carColor] = color;
    }
  
    function print(carName) {
      const entry = [];
  
      for (const key in data[carName]) {
        entry.push(`${key}:${data[carName][key]}`);
      }
  
      console.log(entry.join(","));
    }
  
    for (let car of arr) {
      let [command, carName, inherit, carNameTwo] = car.split(" ");
      createCar[command](carName, inherit, carNameTwo);
    }
  }
  
  cars([
    "create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2",
  ]);
  
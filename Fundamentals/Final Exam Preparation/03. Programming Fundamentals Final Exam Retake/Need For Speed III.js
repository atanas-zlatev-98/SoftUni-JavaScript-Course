function needForSpeed(arr) {

    let numberOfCars = Number(arr.shift());

    let cars = {};

    for(let i = 0; i < numberOfCars;i++){
        let currentCar = arr[i].split('|');

        let [car,mileage,fuel] = currentCar;
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[car] = {
            mileage,
            fuel
        }
    }

    for(let i = 0;i < numberOfCars;i++){
        arr.shift();
    }

    while(arr[0] !== 'Stop'){
        let currentCommand = arr[0].split(' : ');

        let command = currentCommand.shift();
        
        if(command == 'Drive'){

          let [car,distance,fuelNeeded] = currentCommand;

          distance = Number(distance);
          fuelNeeded = Number(fuelNeeded);

          let getFuel = cars[car]['fuel'];
        
          if(fuelNeeded > getFuel){
            console.log(`Not enough fuel to make that ride`);
        
          }else {
            cars[car]['mileage'] += distance;
            cars[car]['fuel'] -= fuelNeeded;
            console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

          }

          let getMileage = cars[car]['mileage'];

          if(getMileage >= 100_000){
            console.log(`Time to sell the ${car}!`);
            delete cars[car]; 
          }

          
        }else if(command == 'Refuel'){

            let [car,carFuel] = currentCommand;
            let maxFuel = 75;
            let getFuel = cars[car]['fuel'];
            carFuel = Number(carFuel);
            if(getFuel + carFuel > maxFuel){
                let fuelPut = maxFuel - getFuel;
                console.log(`${car} refueled with ${fuelPut} liters`);
                cars[car]['fuel'] = 75;
            }else {
                console.log(`${car} refueled with ${carFuel} liters`);
                cars[car]['fuel'] += carFuel;
            }
                        

        }else if(command == 'Revert'){

            let [car,carKilometers] = currentCommand;
            carKilometers = Number(carKilometers)
           

            let getMileage = cars[car]['mileage'];

            if(getMileage - carKilometers < 10_000){
                cars[car]['mileage'] = 10000;
            }else {
                cars[car]['mileage'] -= carKilometers;
                console.log(`${car} mileage decreased by ${carKilometers} kilometers`);
            }

        }
        arr.shift();
    }

    for(let [car,carValues] of Object.entries(cars)){
       let [mileage,fuel] = Object.entries(carValues);

       console.log(`${car} -> Mileage: ${mileage[1]} kms, Fuel in the tank: ${fuel[1]} lt.`);
    }



}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );

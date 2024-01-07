function spaceTravel(arr){

    let commands = arr.shift().split('||');

    let fuel = Number(arr.shift());
    let ammunition = Number(arr.shift());
    

    for(let i = 0; i < commands.length;i++){

        let tokens = commands[i].split(' ');

        let command = tokens[0];
        let value = Number(tokens[1]);

        if(command == 'Travel'){

            if(fuel < value){
                console.log('Mission failed.');
                return;
            }else {
                console.log(`The spaceship travelled ${value} light-years.`);
                fuel -= value
            }

        }else if(command == 'Enemy'){

            if(ammunition >= value){
                console.log(`An enemy with ${value} armour is defeated.`)
                ammunition -= value;
            }else if(ammunition < value){
               
                let fuelNeededToOutrun = value * 2;

                if(fuel > fuelNeededToOutrun){
                    console.log(`An enemy with ${value} armour is outmaneuvered.`)
                    fuel -= fuelNeededToOutrun;
                }else {
                    console.log(`Mission failed.`);
                    return;
                }
            }

        }else if(command == 'Repair'){

            fuel += value;
            ammunition += value * 2;

            console.log(`Ammunitions added: ${value * 2}.`);
            console.log(`Fuel added: ${value}.`);

        }else if(command == 'Titan'){
            console.log(`You have reached Titan, all passengers are safe.`);
            return;
        }
    }

}

//spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan','60','100'])
spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan','50','80']);
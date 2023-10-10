function carWash(arr){

    let value = 0;
    const soap = () => value += 10;
    const water = () => value += (value * 0.20);
    const vacuumCleaner = () => value += (value * 0.25);
    const mud = () => value -= (value * 0.10);

    for(let i = 0;i < arr.length;i++){
        let currentProgram = arr[i];
        
        if(currentProgram == 'soap'){
            soap();
        }else if(currentProgram == 'water'){
            water();
        }else if(currentProgram == 'vacuum cleaner'){
            vacuumCleaner()
        }else if(currentProgram == 'mud'){
            mud();
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']);
carWash(["soap", "water", "mud", "mud", "water", "mud","vacuum cleaner"]);
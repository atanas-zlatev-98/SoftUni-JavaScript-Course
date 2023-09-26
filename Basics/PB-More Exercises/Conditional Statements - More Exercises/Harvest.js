function harvest(input){

    let lozqta = Number(input[0])
    let grozdeKm = Number(input[1])
    let vinoNeeded = Number(input[2])
    let piqnici = Number(input[3])

    let grozdeIzkarano = lozqta * grozdeKm;
    let vinceto = (0.40 * grozdeIzkarano) / 2.5;
    let vinoLeft = vinceto - vinoNeeded;

    if(vinceto >= vinoNeeded){
        console.log(`Good harvest this year! Total wine: ${Math.ceil(vinceto)} liters.`);
        console.log(`${vinoLeft} liters left -> ${Math.ceil(vinoLeft / piqnici)} liters per person.`)
    }else {
        console.log(`It will be a tough winter! More ${Math.floor(vinoNeeded - vinceto)} liters wine needed.`)
    }

}

harvest([650,2,175,3]);
//harvest(1020,1.5,425,4);
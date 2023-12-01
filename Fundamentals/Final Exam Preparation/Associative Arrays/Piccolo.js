function piccolo(arr){

    let parkingLot = {};

    for(let car of arr){
        let [direction,carNumber] = car.split(', ');

        if(direction == 'IN'){
            parkingLot[carNumber] = direction;
        }else if(direction == 'OUT'){
            delete parkingLot[carNumber];
        }
    }

    let sorted = Object.entries(parkingLot).sort();

    if(sorted.length > 0){
        for(let car of sorted){
            console.log(car[0]);
        }
    }else {
        console.log(`Parking Lot is Empty`);
    }
   
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])
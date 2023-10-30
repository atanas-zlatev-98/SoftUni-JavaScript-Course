function flightSchedule(arr){

    let [secotor,secotorStatus,status] = arr;

    status = status.toString();
    let readyToFly = 'Ready to fly'

    let allFlights = {};


   for(let i = 0; i < secotor.length;i++){
        
        let tokens = secotor[i].split(' ');
        let [code,destination] = tokens;
        allFlights[code] = {Destination:destination,Status: readyToFly};
    }

    for(let j = 0;j<secotorStatus.length;j++){
        let tokens = secotorStatus[j].split(' ');
        let [code,currentStatus] = tokens;

        if(allFlights.hasOwnProperty(code)){
            allFlights[code].Status = currentStatus;
        }
    }

    for(let flight in allFlights){
        if(allFlights[flight].Status == status){
            console.log(allFlights[flight]);
        }
    }
}


/*flightSchedule([['WN269 Delaware',

'FL2269 Oregon',

'WN498 Las Vegas',

'WN3145 Ohio',

'WN612 Alabama',

'WN4010 New York',

'WN1173 California',

'DL2120 Texas',

'KL5744 Illinois',

'WN678 Pennsylvania'],

['DL2120 Cancelled',

'WN612 Cancelled',

'WN1173 Cancelled',

'SK430 Cancelled'],

['Cancelled']

])*/

flightSchedule([['WN269 Delaware','FL2269 Oregon','WN498 Las Vegas','WN3145 Ohio','WN612 Alabama',

'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'],
 ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], 
 ['Ready to fly']])
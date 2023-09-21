function traveling(input) {
    let destination = input[0];
    let minimalBudget = Number(input[1]);

    let index = 2;
    let savings = 0;

    let command = input[index];

    while (command !== 'End') {

        while (minimalBudget >= savings) {

            let currentState = Math.abs(input[index]);

            if (currentState >= 0) {
                savings += Number(currentState);
            } else{
                destination = currentState;
            }
            currentState = input[index];
            index++;

            if (savings >= minimalBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            
        }

       
        savings = 0;
        destination =input[index];
       
        command = input[index];
        index++;
        minimalBudget = Number(input[index++]);

    }

}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);



/*let destination = input[0];
let minimalBudget = input[1];

let savings = 0;

let index = 1;
let command = input[index];
index++;

while (command !== "End") {
   let currentState = input[index];
   index++;

   console.log(currentState);

   if(savings < minimalBudget){
    let currentSaving = input[index];
    index++

    savings += currentSaving;
    console.log(currentSaving);
    
   } else {
    break;
   }
}*/
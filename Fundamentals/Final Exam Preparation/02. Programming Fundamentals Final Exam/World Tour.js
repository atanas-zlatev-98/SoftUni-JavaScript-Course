function worldTour(arr){
    let destination = arr.shift();

    while(arr[0] !== 'Travel'){
        let currentDestination = arr[0].split(':');
        let command = currentDestination.shift();

        if(command == 'Add Stop'){
            let [idx,value] = currentDestination;
            idx = Number(idx);

            if(typeof destination[idx] !== 'undefined'){
                let newString = destination.slice(0, idx) + value + destination.slice(idx);
                destination = newString;
            }

        }else if(command == 'Remove Stop'){

            let [startIndex,endIndex] = currentDestination.map(Number);

            if(typeof destination[startIndex] !== 'undefined' && typeof destination[endIndex] !== 'undefined'){

                let toDelete = endIndex - startIndex;

                let newString = destination.split('');
                newString.splice(startIndex,toDelete + 1);
                let join = newString.join('');
                
                 destination = join

            }

        }else if(command == 'Switch'){
            let [replaceThis,withThis] = currentDestination;

            if(destination.includes(replaceThis)){
              
                    let replace = destination.replace(replaceThis,withThis);
                    destination = replace;
                
            }

        }
        console.log(destination);
        arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`)

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])


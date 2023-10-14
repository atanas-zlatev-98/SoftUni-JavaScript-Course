function inventory(arr){

    let inv = arr.shift();
    let inventory = inv.split(', ');

    for(let i = 0; i < arr.length;i++){
        let commands = arr[i];
        let splitCommands = commands.split(' - ');
        let currentCommand = splitCommands[0];
        let secondCommand = splitCommands[1];

        if(currentCommand == 'Collect'){
            if(!inventory.includes(secondCommand)){
                inventory.push(secondCommand);
            }
        }else if(currentCommand == 'Drop'){
            if(inventory.includes(secondCommand)){
                let index = inventory.indexOf(secondCommand);
                inventory.splice(index,1);
            }
        }else if(currentCommand == 'Combine Items'){
            let splitCommand = secondCommand.split(':');

            let firstElement = splitCommand[0];
            let secondElement = splitCommand[1];

            if(inventory.includes(firstElement)){
                let index = inventory.indexOf(firstElement);
                inventory.splice(index+1,0,secondElement);
            }
        }else if(currentCommand == 'Renew'){
                
            if(inventory.includes(secondCommand)){
                let index = inventory.indexOf(secondCommand);
                inventory.splice(index,1);
                inventory.push(secondCommand);
            }
        }else {
            console.log(inventory.join(', '));
            break;
        }


    }
}

inventory(['Iron, Wood, Sword', 'Collect - Gold','Drop - Wood', 'Craft!']);
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron','Craft!']);
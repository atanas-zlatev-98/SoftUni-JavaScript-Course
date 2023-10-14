function inventory(arr){

    let inv = arr.shift();
    let inventory = inv.split(' ');

    for(let i = 0 ; i < arr.length;i++){

        let command = arr[i].split(' ');

        if(command[0] == 'Buy'){

            if(!inventory.includes(command[1])){
                inventory.push(command[1]);
            }

        }else if(command[0] == 'Trash'){

            let findIdx = inventory.indexOf(command[1]);

            if(command[1] == inventory[findIdx]){
                let index = inventory.indexOf(command[1]);
                inventory.splice(index,1);
            }
            
        }else if(command[0] == 'Repair'){

            if(inventory.includes(command[1])){
                let index = inventory.indexOf(command[1]);
                inventory.splice(index,1);
                inventory.push(command[1]);
            }

        }else if(command[0] == 'Upgrade'){

            let commandSplit = command[1].split('-');
           
            if(inventory.includes(commandSplit[0])){
                
                let index = inventory.indexOf(commandSplit[0]);
                inventory.splice(index +1,0,commandSplit.join(':'));
                
            }
            
        }
    }
    console.log(inventory.join(' '));

}

inventory(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel']);
inventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])
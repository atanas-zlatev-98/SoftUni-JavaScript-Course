function shoppingList(list){

    let shoppingList = list.shift().split('!');
    
    for(let i = 0; i < list.length;i++){
        let commands = list[i];
        let splitCommands = commands.split(' ');

        let priority = splitCommands[0];
        let product = splitCommands[1];

        if(priority == 'Urgent'){

            if(!shoppingList.includes(product)){
                shoppingList.unshift(product);
            }

        }else if(priority == 'Unnecessary'){

            if(shoppingList.includes(product)){
                let index = shoppingList.indexOf(product);
                shoppingList.splice(index,1);
            }

        }else if(priority == 'Correct'){

            if(shoppingList.includes(product)){
                let index = shoppingList.indexOf(product);
                shoppingList.splice(index,1,splitCommands[2]);
            }

        }else if(priority == 'Rearrange'){

            if(shoppingList.includes(product)){
                let index = shoppingList.indexOf(product);
                shoppingList.splice(index,1);
                shoppingList.push(product);
            }

        }else {
            console.log(shoppingList.join(', '));
        }
        
    }

}

shoppingList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!"])


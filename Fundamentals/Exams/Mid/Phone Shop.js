function phoneShop(arr){

    let listOfPhones = arr.shift().split(', ');
  
    for(let i = 0; i < arr.length;i++){
        let tokens = arr[i].split(' - ');

        let command = tokens[0];
        let phone = tokens[1];

        if(command == 'Add'){

            if(!listOfPhones.includes(phone)){
                listOfPhones.push(phone);
            }

        }else if(command == 'Remove'){

            if(listOfPhones.includes(phone)){
                let idx = listOfPhones.indexOf(phone);
                listOfPhones.splice(idx,1);
            }

        }else if(command == 'Bonus phone'){

            let tokens = phone.split(':')
            let oldPhone = tokens[0];
            let newPhone = tokens[1];

            if(listOfPhones.includes(oldPhone)){
                let idx = listOfPhones.indexOf(oldPhone);
                listOfPhones.splice(idx+1,0,newPhone);
            }

        }else if(command == 'Last'){

            if(listOfPhones.includes(phone)){
                let idx = listOfPhones.indexOf(phone);
                listOfPhones.splice(idx,1);
                listOfPhones.push(phone);
            }

        }else if(command == 'End'){
            console.log(listOfPhones.join(', '));
        }
        
    }

}

phoneShop(["SamsungA50, MotorolaG5, IphoneSE",'Add - Iphone10','Remove - IphoneSE','End']);
phoneShop(["HuaweiP20, XiaomiNote",'Remove - Samsung','Bonus phone - XiaomiNote:Iphone5','End']);
phoneShop(['SamsungA50, MotorolaG5, HuaweiP10', 'Last - SamsungA50','Add - MotorolaG5','End']);

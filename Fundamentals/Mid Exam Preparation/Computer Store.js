function computerStore(arr){

    let regularOrSpecial = arr.pop();

    let totalSum = 0;

    for(let i = 0; i < arr.length;i++){
        let currentCommand = Number(arr[i]);

        if(currentCommand < 0){
            console.log(`Invalid price!`);
        }else {
            totalSum += currentCommand;
        }
    }

    if(totalSum == 0){
        console.log(`Invalid order!`)
    }else {

        if(regularOrSpecial == 'regular'){

            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalSum.toFixed(2)}$`)
            
            let taxes = totalSum * 0.20;

            console.log(`Taxes: ${taxes.toFixed(2)}$`);

            console.log(`-----------`);

            let totalPrice = totalSum + taxes;

            console.log(`Total price: ${totalPrice.toFixed(2)}$`);
           

        }else if(regularOrSpecial == 'special'){

            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${totalSum.toFixed(2)}$`)
            
            let taxes = totalSum * 0.20;

            console.log(`Taxes: ${taxes.toFixed(2)}$`);

            console.log(`-----------`);

            let totalPrice = totalSum + taxes;

            let discountPrice = totalPrice - totalPrice * 0.10;

            console.log(`Total price: ${discountPrice.toFixed(2)}$`);
    
        }

    }

}

//computerStore(['1023','15','-20','-5.50','450','20','17.66','19.30','regular']);
computerStore(['1050','200','450','2','18.50','16.86','special']);
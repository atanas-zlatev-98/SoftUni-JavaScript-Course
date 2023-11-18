function furniture(arr){

    let moneySpent = 0;
    let pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[0-9]+\.?\d+)!(?<quantity>[0-9]+)/;
    let furnitureBought = [];

    while(arr[0] !== 'Purchase'){
        let currentText = arr[0];
        let match = currentText.match(pattern);

        if(match){
            
            let {furniture,price,quantity} = match.groups;
            price = Number(price);
            quantity = Number(quantity);
            
            moneySpent += price * quantity;
            furnitureBought.push(furniture);
        }

     arr.shift();
    }

    if(furnitureBought.length > 0 ){
        console.log(`Bought furniture:`);

        for(let furniture of furnitureBought){
            console.log(furniture);
        }
        console.log(`Total money spend: ${moneySpent.toFixed(2)}`)
    }else {
        console.log(`Bought furniture:`);
        console.log(`Total money spend: ${moneySpent.toFixed(2)}`);
    }

}

furniture(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])
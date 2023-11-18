function softUniBarIncome(arr){

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/
    
    let totalIncome = 0;

    while(arr[0] !== 'end of shift'){

        let current = arr[0];

        let match = current.match(pattern);

        if(match){
            
            let {name,product,count,price} = match.groups;
            count = Number(count);
            price = Number(price);
            
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);

            totalIncome += price * count;

            
        }   
        

        arr.shift();
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',

'%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4',

'%Valid%<Valid>valid|10|valid20$',

'end of shift'])
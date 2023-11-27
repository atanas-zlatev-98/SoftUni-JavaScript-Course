function softUniBarIncome(arr){
let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

let totalIncome = 0;
    while(arr[0] !== 'end of shift'){

        let currentShift = arr[0];

        let match = pattern.exec(currentShift);

        if(match){

            let {name,product,count,price} = match.groups;
            let income = Number(count) * Number(price);
            console.log(`${name}: ${product} - ${income.toFixed(2)}`);
            totalIncome += income;
        }

        arr.shift();
    }
 
    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)
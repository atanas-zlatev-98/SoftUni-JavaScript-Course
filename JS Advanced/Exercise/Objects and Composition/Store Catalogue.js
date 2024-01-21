function storeCatalogue(arr) {
    let result = {};

    for(let prod of arr){
        let [product,price] = prod.split(' : ');
        price = Number(price);

        result[product] = price;

    }

    let sorted = Object.entries(result).sort((a,b)=>a[0].localeCompare(b[0]));
    
    let letter = '';

    for(let [prod,value] of sorted){

        if(letter == prod.charAt(0)){
            console.log(`${prod}: ${value}`);
        }else {
            letter = prod.charAt(0);
            console.log(letter);
            console.log(`${prod}: ${value}`);
        }
    }
}

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5", 
'Raspberry P : 4999',
 'Rolex : 100000', 
 'Rollon : 10', 
 'Rali Car : 2000000',
  'Pesho : 0.000001',
   'Barrel : 10'])
function catalogue(arr){

    let products = {};
    for(let product of arr){

        let [productName,productQua] = product.split(' : ');

        products[productName] = Number(productQua);

    }

    let sorted = Object.entries(products).sort((a,b) => a[0].localeCompare(b[0]));
    let currentLetter = '';
    for(let [key,value] of sorted){

        if(currentLetter == key.charAt(0)){
            console.log(`${key}: ${value}`)
        }else {
            currentLetter = key.charAt(0);
            console.log(currentLetter);
            console.log(`${key}: ${value}`);
        }
    }

}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    
    )
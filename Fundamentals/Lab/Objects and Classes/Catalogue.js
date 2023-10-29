function catalogue(arr){

    let catalog = [];

    for(let products of arr){

        let product = products.split(" : ");
        let [productName, productPrice] = product;
        
        productPrice = Number(productPrice);

        let newProduct = {name: productName,price: productPrice};

        catalog.push(newProduct);

    }

    catalog.sort((a,b) => a.name.localeCompare(b.name));
    
    let currentLetter = '';
    for(let product of catalog){
        
        if(product.name.charAt(0) === currentLetter){
            console.log(`${product.name}: ${product.price}`)
        }else{
            currentLetter = product.name.charAt(0);
            console.log(currentLetter);
            console.log(`${product.name}: ${product.price}`)
        }
    }

}

catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])
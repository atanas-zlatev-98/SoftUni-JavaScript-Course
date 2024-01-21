function lowestPrice(arr) {

    let result = {};


    for(let el of arr){

        let [town,product,price] = el.split(' | ');
        price = Number(price);

        if(product in result){

            if(result[product]['price'] > price){
                result[product]['price'] = price;
                result[product]['town'] = town;
            }

        }else {
            result[product] = {
                town,
                price
            }
        }
    }
    
    for(let [product,town] of Object.entries(result)){
        console.log(`${product} -> ${town.price} (${town.town})`);
    }
}
lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

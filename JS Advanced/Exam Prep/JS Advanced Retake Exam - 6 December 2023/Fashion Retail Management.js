class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, quantity, price) {

    let currentProduct = this.productStock.find((x) => x.productName === productName);

    if (currentProduct && currentProduct.size === size) {
      currentProduct.quantity += Number(quantity);
      return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }else {
        this.productStock.push({ productName, size, quantity, price });
        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

   
  }

  sendProduct(productName, size) {
    
    let currentProduct = this.productStock.find(
      (x) => x.productName === productName);

    if (!currentProduct || currentProduct.productName !== productName || currentProduct.size !== size) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    }

    this.productStock = this.productStock.filter(x=> x.productName !== productName);

    return `The product ${productName}, size ${size} was successfully removed from the inventory`
  }

  findProductsBySize(size){
    this.productStock = this.productStock.filter(x => x.size === size);
    let products = [];

    for(let values of Object.values(this.productStock)){
        
        products.push(`${values.productName}-${values.quantity} pieces`);
    }

    if(this.productStock.length <= 0){
        return `There are no products available in that size`
    }

    return products.join(', ');
  }

  listProducts(){
    
    if(this.productStock.length <= 0){
        return `${this.storehouse} storehouse is empty`
    }
    let products = '';
    this.productStock = this.productStock.sort((a,b) => a.productName.localeCompare(b.productName));

    for(let values of Object.values(this.productStock)){
        products += `${values.productName}/Size:${values.size}/Quantity:${values.quantity}/Price:${values.price}$\n`;
    }
    return `${this.storehouse} storehouse in ${this.location} available products:\n${products.trim()}`
  }
}
const storeHouse = new FashionRetailInventory("East", "Milano");
  console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
  console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
  console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
  console.log(storeHouse.listProducts());

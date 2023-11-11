function storeProvision(stock, orderedProducts) {
  let inventory = {};

  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    let productQuantity = Number(stock[i + 1]);

    if (!inventory.hasOwnProperty(product)) {
      inventory[product] = productQuantity;
    }
  }

  for (let j = 0; j < orderedProducts.length; j += 2) {
    let orderedProduct = orderedProducts[j];
    let orderedProductQuantity = Number(orderedProducts[j + 1]);

    if (inventory.hasOwnProperty(orderedProduct)) {
      inventory[orderedProduct] += orderedProductQuantity;
    } else {
      inventory[orderedProduct] = orderedProductQuantity;
    }
  }

  for (let [key, value] of Object.entries(inventory)) {
    console.log(`${key} -> ${value}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

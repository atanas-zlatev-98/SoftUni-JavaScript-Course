function storeProvision(stock, orderedProducts) {
  let inventory = {};

  for (let i = 0; i < stock.length; i += 2) {
    inventory[stock[i]] = Number(stock[i + 1]);
  }

  for (let i = 0; i < orderedProducts.length; i += 2) {

    if (inventory.hasOwnProperty(orderedProducts[i])) {
      inventory[orderedProducts[i]] += Number(orderedProducts[i + 1]);
    } else {
      inventory[orderedProducts[i]] = Number(orderedProducts[i + 1]);
    }

  }
  
  for (let [product, qua] of Object.entries(inventory)) {
    console.log(`${product} -> ${qua}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

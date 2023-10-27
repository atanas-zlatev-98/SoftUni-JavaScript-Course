function storeProvision(stock, orderedProducts) {

  let products = {};

  for (let i = 0; i < stock.length; i += 2) {
    let productName = stock[i];
    let quantity = Number(stock[i + 1]);

    products[productName] = quantity;
  }

  for (let j = 0; j < orderedProducts.length; j += 2) {
    let productName = orderedProducts[j];
    let quantity = Number(orderedProducts[j + 1]);

    if (productName in products) {
      products[productName] += quantity;
    } else {
      products[productName] = quantity;
    }
  }

  let kvps = Object.entries(products);

  for (let entry of kvps) {
    console.log(`${entry[0]} -> ${entry[1]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

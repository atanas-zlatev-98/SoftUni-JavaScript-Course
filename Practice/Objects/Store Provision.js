function storeProvision(stock, products) {
  let product = {};

  for (let i = 0; i < stock.length; i += 2) {
    let prod = stock[i];
    let quantity = Number(stock[i + 1]);

    product[prod] = quantity;
  }

  for (let j = 0; j < products.length; j += 2) {
    let storeProd = products[j];
    let storeProdQua = Number(products[j + 1]);

    if (storeProd in product) {
      product[storeProd] += storeProdQua;
    } else {
      product[storeProd] = storeProdQua;
    }
  }

  let kvps = Object.entries(product);

  for (let [prod, qua] of kvps) {
    console.log(`${prod} -> ${qua}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

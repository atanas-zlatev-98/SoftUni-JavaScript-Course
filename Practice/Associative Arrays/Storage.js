function storage(arr) {
  let storage = new Map();

  for (let products of arr) {
    let [product, quantity] = products.split(" ");
    quantity = Number(quantity);

    if (storage.has(product)) {
      let qua = storage.get(product, quantity);
      let newQua = qua + quantity;
      storage.set(product, newQua);
    } else {
      storage.set(product, quantity);
    }
  }

  for (let products of storage) {
    console.log(`${products[0]} -> ${products[1]}`);
  }
}

storage(['apple 50',

'apple 61',

'coffee 115',

'coffee 40']);

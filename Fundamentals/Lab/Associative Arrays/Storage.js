function storage(arr) {
  let products = new Map();

  for (let produ of arr) {

    let [product, productQua] = produ.split(" ");
    productQua = Number(productQua);

    if (products.has(product)) {

      let oldQua = products.get(product);
      let newQua = oldQua + productQua;
      products.set(product, newQua);

    } else {
      products.set(product, productQua);
    }
  }

  for(let [prod,prodQua] of products){
    console.log(`${prod} -> ${prodQua}`);
  }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);

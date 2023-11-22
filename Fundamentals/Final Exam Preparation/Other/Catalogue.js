function catalogue(arr) {
  let products = {};

  for (let product of arr) {
    let [productName, productPrice] = product.split(" : ");
    products[productName] = productPrice;
  }

  let sorted = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let currentLetter = "";

  for (let [key, value] of sorted) {
    if (key.charAt(0) === currentLetter) {
      console.log(`${key}: ${value}`);
    } else {
      currentLetter = key.charAt(0);
      console.log(currentLetter);
      console.log(`${key}: ${value}`);
    }
  }
}

catalogue([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);

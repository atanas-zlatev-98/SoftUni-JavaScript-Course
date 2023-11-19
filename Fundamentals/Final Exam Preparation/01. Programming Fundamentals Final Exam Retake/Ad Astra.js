function adAstra(arr) {
  let message = arr.shift();
  let pattern =
    /([#|])(?<product>[A-Za-z\s]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let totalCalories = 0;

  let products = [];

  let match = pattern.exec(message);

  while (match !== null) {
    let { product, expiration, calories } = match.groups;
    let newProduct = { product, expiration, calories };
    products.push(newProduct);

    totalCalories += Number(calories);

    match = pattern.exec(message);
  }

  console.log(
    `You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`
  );

  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];
    console.log(
      `Item: ${currentProduct.product}, Best before: ${currentProduct.expiration}, Nutrition: ${currentProduct.calories}`
    );
  }
}
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

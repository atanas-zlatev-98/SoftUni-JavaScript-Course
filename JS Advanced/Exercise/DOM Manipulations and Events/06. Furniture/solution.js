function solve() {
  const [textAreaInput, textAreaResult] = Array.from(
    document.querySelectorAll("textarea")
  );
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  const tableRef = document.querySelector("tbody");

  generateBtn.addEventListener("click", () => {
    let JSONtoString = JSON.parse(textAreaInput.value);

    for (let product of JSONtoString) {
      createTableRow(product);
    }
  });

  buyBtn.addEventListener("click", buy);

  function createTableRow(furniture) {
    const tr = document.createElement("tr");

    tr.innerHTML += `<td><img src=${furniture.img}></td>`;
    tr.innerHTML += `<td><p>${furniture.name}</p></td>`;
    tr.innerHTML += `<td><p>${furniture.price}</p></td>`;
    tr.innerHTML += `<td><p>${furniture.decFactor}</p></td>`;
    tr.innerHTML += `<td><input type='checkbox'></td>`;

    tableRef.appendChild(tr);
  }

  function buy() {
    let totalPrice = 0;
    let averageDecFactor = 0;
    let furniture = [];

    const selectedFurniture = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    );

    for (let checked of selectedFurniture) {
      let [img, name, price, decFactor] = Array.from(
        checked.parentElement.parentElement.children
      );

      let productName = name.children[0].textContent;
      
      let productPrice = Number(price.children[0].textContent);
      let productDecFactor = Number(decFactor.children[0].textContent);

      totalPrice += productPrice;
      averageDecFactor += productDecFactor;
      furniture.push(productName);

      textAreaResult.value =
        `Bought furniture: ` +
         furniture.join(", ") +
        `\n` +
        `Total price: ${totalPrice.toFixed(2)}` +
        `\n` +
        `Average decoration factor: ${averageDecFactor / furniture.length}`;
    }
  }
}

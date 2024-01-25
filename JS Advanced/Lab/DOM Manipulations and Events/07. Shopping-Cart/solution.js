function solve() {

  let products = [];
  let totalPrice = 0;
  let checkoutButton = document.querySelector('.checkout');

  let btnAdd = Array.from(document.querySelectorAll('.add-product'));
  let getName = Array.from(document.querySelectorAll('.product-title'));
  let getPrice = Array.from(document.querySelectorAll('.product-line-price'));

  let textArea = document.querySelector('textarea');

  for (let i = 0; i < btnAdd.length; i++) {

    btnAdd[i].addEventListener('click', () => {

      let name = getName[i].textContent;
      let price = Number(getPrice[i].textContent);

      if (!products.includes(name)) {
        products.push(name);
      }

      totalPrice += Number(price);
      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;;
    });
  }

  checkoutButton.addEventListener('click', () => {
    textArea.value += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;

    let disableButtons = Array.from(document.querySelectorAll('button'));
    
    disableButtons.forEach((button) => (button.disabled = true));
  });
}

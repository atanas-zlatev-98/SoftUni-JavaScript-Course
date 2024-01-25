function addItem() {
  let inputRef = document.getElementById("newItemText");
  let items = document.getElementById("items");
  let liElement = document.createElement("li");
  
  let inputValue = inputRef.value;

  liElement.textContent = inputValue;
  items.appendChild(liElement);

  inputRef.value = '';
}

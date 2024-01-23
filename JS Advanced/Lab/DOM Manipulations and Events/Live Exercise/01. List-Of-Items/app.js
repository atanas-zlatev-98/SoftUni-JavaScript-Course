function addItem() {
  const items = document.getElementById("items");
  const valueRef = document.getElementById("newItemText");
  const itemValue = valueRef.value;

  const li = document.createElement("li");
  li.textContent = itemValue;

  items.appendChild(li);
}

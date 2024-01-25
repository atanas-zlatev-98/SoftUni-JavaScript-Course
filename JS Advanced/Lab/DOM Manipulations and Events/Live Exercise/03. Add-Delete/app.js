function addItem() {
  const items = document.getElementById("items");
  const valueRef = document.getElementById("newItemText");
  const itemValue = valueRef.value;

  const li = document.createElement("li");
  li.textContent = itemValue;

  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", onDelete);

  items.appendChild(li);

  function onDelete(event) {
    const deleteBtn = event.target;
    const liElement = deleteBtn.parentElement;
    liElement.remove();
  }
}

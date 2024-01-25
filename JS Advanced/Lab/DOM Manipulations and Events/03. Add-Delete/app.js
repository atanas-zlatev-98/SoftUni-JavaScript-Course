function addItem() {
  const inputRef = document.getElementById("newItemText");
  const inputValue = inputRef.value;

  const items = document.getElementById("items");

  const liElement = document.createElement("li");
  liElement.textContent = inputValue;

  const deleteElement = document.createElement("a");
  deleteElement.textContent = "[Delete]";

  deleteElement.setAttribute("href", "#");
  liElement.appendChild(deleteElement);

  deleteElement.addEventListener("click", (e) => {
    let currentButton = e.target.parentElement;
    currentButton.remove();
  });

  items.appendChild(liElement);

  inputRef.value = "";
}

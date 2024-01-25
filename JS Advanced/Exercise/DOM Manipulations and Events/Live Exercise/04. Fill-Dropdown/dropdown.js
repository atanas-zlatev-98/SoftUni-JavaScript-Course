function addItem() {
    
  const textRef = document.getElementById("newItemText");
  const textValue = textRef.value;

  const selectOptionRef = document.getElementById("newItemValue");
  const optionsValue = selectOptionRef.value;

  const selectDropDown = document.getElementById("menu");

  const options = document.createElement("option");

  options.value = optionsValue;
  options.textContent = textValue;

  selectDropDown.appendChild(options);

  textRef.value = ''
  selectOptionRef.value = '';
}

function attachEventsListeners() {
  const inputs = Array.from(document.querySelectorAll('input[type="button"]'));

  inputs.forEach((input) => input.addEventListener("click", convert));

  function convert(e) {
    let currentInput =
      e.currentTarget.parentElement.querySelectorAll('input[type="text"]')[0];
    let currentValue = Number(currentInput.value);

    switch (currentInput.id) {
      case "days":
        calc(currentInput.id, currentValue);
        break;
      case "hours":
        calc(currentInput.id, currentValue);
        break;
      case "minutes":
        calc(currentInput.id, currentValue);
        break;
      case "seconds":
        calc(currentInput.id, currentValue);
        break;
      default:
        break;
    }
  }

  function calc(input, day) {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    let currentInputValue = day;

    if (input == "days") {
      currentInputValue = day;
    } else if (input == "hours") {
      currentInputValue = currentInputValue / 24;
    } else if (input == "minutes") {
      currentInputValue = currentInputValue / 24 / 60;
    } else if (input == "seconds") {
      currentInputValue = currentInputValue / 24 / 60 / 60;
    }

    inputs[0].value = currentInputValue;
    inputs[1].value = currentInputValue * 24;
    inputs[2].value = currentInputValue * 24 * 60;
    inputs[3].value = currentInputValue * 24 * 60 * 60;
  }
}

function focused() {
  let selectedInputs = Array.from(document.querySelectorAll("input"));

  selectedInputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      let currentElement = e.target.parentElement;
      currentElement.classList.add("focused");
    });
  });
  selectedInputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
      let currentElement = e.target.parentElement;
      currentElement.classList.remove("focused");
    });
  });
}

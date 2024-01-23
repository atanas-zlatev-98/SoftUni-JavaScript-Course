function solve() {

  let inputRef = document.getElementById("input");
  let result = document.getElementById("output");

  let inputRefValue = inputRef.value;

  let splitText = inputRefValue.split(".").filter((x) => x.length > 0);

  for (let i = 0; i < splitText.length; i += 3) {
    let text = [];
    for (let k = 0; k < 3; k++) {
      if (splitText[i + k]) {
        text.push(splitText[i + k]);
      }
    }
    result.innerHTML += `<p>${text.join(". ") + "."}</p>`;
  }
}

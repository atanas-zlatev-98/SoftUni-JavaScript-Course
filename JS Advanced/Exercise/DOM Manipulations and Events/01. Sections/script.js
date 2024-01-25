function create(words) {
  const content = document.querySelector("#content");

  words.forEach((word) => {
    
    const divElement = document.createElement("div");
    const pElement = document.createElement("p");

    pElement.textContent = word;
    pElement.style.display = "none";

    divElement.appendChild(pElement);
    content.appendChild(divElement);

    divElement.addEventListener("click", (e) => {
      e.currentTarget.children[0].style.display = 'block';
    });
  });
}

function search() {
  const inputValue = document.getElementById("searchText").value;
  const result = document.getElementById("result");

  const list = document.getElementById("towns");
  const listTowns = list.children;

  let count = 0;

  for (let i = 0; i < listTowns.length; i++) {
    let currentTown = document.getElementsByTagName("li")[i];
    currentTown.style.textDecoration = "none";
    currentTown.style.fontWeight = "normal";
  }

  for (let i = 0; i < listTowns.length; i++) {
    let currentTown = document.getElementsByTagName("li")[i];
    if (currentTown.innerHTML.includes(inputValue)) {
      currentTown.style.textDecoration = "underline";
      currentTown.style.fontWeight = "bold";
      count += 1;
    }
  }

  result.textContent = `${count} matches found`;
}

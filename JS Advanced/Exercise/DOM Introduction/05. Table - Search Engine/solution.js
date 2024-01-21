function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let inputValue = document.getElementById("searchField")
    let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
    let searchText = inputValue.value;


    for (let i = 0; i < rowElements.length; i++) {
      rowElements[i].className = "";
    }

    for (let i = 0; i < rowElements.length; i++) {
      let currentRow = rowElements[i].children;

      for (let innerRow = 0; innerRow < currentRow.length; innerRow++) {

        let currInnerRow = currentRow[innerRow];

        if (currInnerRow.textContent.includes(searchText) && searchText !== '') {
         rowElements[i].className = "select";
        }
      }
    }
    searchText.value = '';
  }
}

function deleteByEmail() {

  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const inputRef = document.querySelector('[name = "email"]');
  const inputValue = inputRef.value;

  let success = 'Not found.';
  for(let row of rows){
    if(row.children[1].textContent == inputValue){
        row.remove();
        success = 'Deleted.';

        inputValue = '';
    }
  }

  const output = document.getElementById('result');
  output.textContent = success;


}

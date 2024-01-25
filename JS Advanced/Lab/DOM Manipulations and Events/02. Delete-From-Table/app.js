function deleteByEmail() {
    const table = Array.from(document.querySelectorAll('#customers tbody tr'));
    const inputRef = document.querySelector('[name = "email"]');
    const result = document.getElementById('result');
    const inputValue = inputRef.value;

    let isFound = 'Not found.'

    for(let row of table){
        const children = row.children;
 
        if(children[1].textContent.includes(inputValue) && inputValue){
            row.remove();
            isFound = 'Deleted.';
            break;
        }
     
    }

    result.textContent = isFound;
}
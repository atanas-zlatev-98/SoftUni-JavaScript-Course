function generateReport() {
  const checkedCheckBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
  const tableRows = Array.from(document.querySelectorAll("tbody tr"));
  const dataTh = Array.from(document.querySelectorAll("thead th"));
  const textAreaRef = document.querySelector('textarea');
  

  let result = [];

  for (let i = 0; i < checkedCheckBoxes.length; i++) {
    let currentCheckedRow = checkedCheckBoxes[i].name;

    for (let k = 0; k < tableRows.length; k++) {
        
      let childrenIdx = getSelectedCriteriaIdx(currentCheckedRow);

      if (result[k]) {

        let addMore = result[k];
        addMore[currentCheckedRow] = tableRows[k].children[childrenIdx].textContent;

      } else {

        let obj = {
          [currentCheckedRow]: tableRows[k].children[childrenIdx].textContent,
        };

        result.push(obj);
      }
    }
  }

  function getSelectedCriteriaIdx(criteria) {
    let counter = 0;
    
    for (let i = 0; i < dataTh.length; i++) {
      let currentData = dataTh[i].children[0].name;
      if (currentData == criteria) {
        break;
      } else {
        counter++;
      }
    }

    return counter;
  }

  const toJSON = JSON.stringify(result,null,1);

  textAreaRef.value = toJSON;
  
}

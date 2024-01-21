function solve() {
  const text = document.getElementById('text').value;
  const caseType = document.getElementById('naming-convention').value;

  const appResult = document.getElementById('result');

  if(caseType == 'Camel Case'){

    let camelCase = text.split(' ');
    let result = [];

    for(let i = 0; i < camelCase.length;i++){

      if(i > 0) {
        let currentWord = camelCase[i].toLowerCase();
        let firstLetter = currentWord[0].toUpperCase();
        let textLeft = currentWord.slice(1);
        result.push(firstLetter+textLeft);
      }else {
        result.push(camelCase[i].toLowerCase());
      }
    }

    appResult.textContent = result.join('');
 
  }else if(caseType == 'Pascal Case'){
    let pascalCase = text.split(' ');
    let result = [];

    for(let i = 0;i<pascalCase.length;i++){
      let currentWord = pascalCase[i].toLowerCase();
      let firstLetter = currentWord[0].toUpperCase();
      let textLeft = currentWord.slice(1);
      result.push(firstLetter+textLeft);
    }

    appResult.textContent = result.join('');
  }else {
    appResult.textContent = 'Error!'
  }
}
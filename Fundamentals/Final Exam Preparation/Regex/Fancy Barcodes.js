function fancyBarcodes(arr) {
  let n = Number(arr.shift());

  let pattern = /(@#+)(?<word>[A-Z][A-Za-z0-9]{4,})([A-Z]@#+)/g;
  let digitPattern = /\d/g;

  for (let i = 0; i < n; i++) {

    let currentWord = arr[i];

    let doesMatch = currentWord.match(pattern);

    if(doesMatch){
        doesMatch = doesMatch.toString();
        let checkDigits = doesMatch.match(digitPattern);

        if(checkDigits){
            console.log(`Product group: ${checkDigits.join('')}`);
        }else {
            console.log(`Product group: 00`)
        }
    }else {
        console.log(`Invalid barcode`);
    }
    
  }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])

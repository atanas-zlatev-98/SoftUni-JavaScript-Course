function fancyBarcodes(arr){

    let n = Number(arr.shift());

    let pattern = /(@#+)([A-Z][A-Za-z0-9]{4,})([A-Z][@][#]+)/g;
    let digitPattern = /\d/g;

    for(let i = 0;i<n;i++){
        let currentWord = arr[i];

        let currentMatch = currentWord.match(pattern);

        if(currentMatch){
            let join = currentMatch.join('');
            let checkDigits = join.match(digitPattern);
            
            if(checkDigits){
                console.log(`Product group: ${checkDigits.join('')}`);
            }else{
                console.log(`Product group: 00`)
            }
        }else {
            console.log(`Invalid barcode`)
        }
    }

}

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

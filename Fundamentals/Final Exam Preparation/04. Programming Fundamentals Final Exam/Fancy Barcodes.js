function fancyBarcodes(arr){

    let barcodeCount = Number(arr.shift());

    let pattern = /(@#+)([A-Z][A-Za-z0-9]{4,})([A-Z][@][#]+)/g;
    let digitPattern = /\d/g

    for(let i = 0;i<barcodeCount;i++){
        let currentBarcode = arr[i];
       
        let matches = currentBarcode.match(pattern);

        if(matches){
            let join = matches.join('');
            let getDigits = join.match(digitPattern);
            
            if(getDigits){
                let buffer = ''
                getDigits.map((x) => buffer += x);
                console.log(`Product group: ${buffer}`)
            }else {
                console.log(`Product group: 00`)
            }
        }else{
            console.log(`Invalid barcode`)
        }
    }

}
fancyBarcodes(["4",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##","@##Ch7e46et1E@##"])


function extractFile(str){
    let file = str.split('\\').pop();
    let lastDotIndex = file.lastIndexOf('.');
    let fileName = file.slice(0,lastDotIndex);
    let fileExtension = file.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
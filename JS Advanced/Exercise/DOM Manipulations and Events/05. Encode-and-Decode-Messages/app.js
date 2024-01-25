function encodeAndDecodeMessages() {
  const [encodeBtn, decodeButn] = document.querySelectorAll("button");
  const [textAreaEncode, textAreaDecode] = document.querySelectorAll("textarea");
  
  encodeBtn.addEventListener("click", encode);
  decodeButn.addEventListener("click", decode);

  function encode() {

    let textAreaValue = textAreaEncode.value;
    let encodedValue = "";

    for (let char of textAreaValue) {
      let charCode = char.charCodeAt();
      let newCharCode = charCode + 1;
      let newChar = String.fromCharCode(newCharCode);
      encodedValue += newChar;
    }

    textAreaEncode.value = '';
    textAreaDecode.value = encodedValue;
  }

  function decode() {

      let textAreaValue = textAreaDecode.value;
      let decodedValue = "";

      for (let char of textAreaValue) {
        let charCode = char.charCodeAt();
        let newCharCode = charCode - 1;
        let newChar = String.fromCharCode(newCharCode);
        decodedValue += newChar;
      }
      textAreaDecode.value = decodedValue;
  }
}

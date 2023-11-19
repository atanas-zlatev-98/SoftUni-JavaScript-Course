function imitationGame(arr) {
  let encryptedMessage = arr.shift();
  while (arr[0] !== "Decode") {
    let currentCommant = arr[0].split("|");

    if (currentCommant.includes("ChangeAll")) {
      let [command, replaceThis, withThis] = currentCommant;

      while (encryptedMessage.includes(replaceThis)) {
        let newMessage = encryptedMessage.replace(replaceThis, withThis);
        encryptedMessage = newMessage;
      }
    } else if (currentCommant.includes("Insert")) {
      let [command, index, idxValue] = currentCommant;
      index = Number(index);

      let modifiedString =
        encryptedMessage.slice(0, index) +
        idxValue +
        encryptedMessage.slice(index);
      encryptedMessage = modifiedString;
    } else if (currentCommant.includes("Move")) {
      let [command, number] = currentCommant;
      number = Number(number);

      let modified = encryptedMessage.substring(0, number);
      let newModified = encryptedMessage.slice(number) + modified;
      encryptedMessage = newModified;
    }

    arr.shift();
  }
  console.log(`The decrypted message is: ${encryptedMessage}`);
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);

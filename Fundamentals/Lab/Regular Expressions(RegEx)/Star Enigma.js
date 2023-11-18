function starEnigma(arr) {
  let numberMessages = Number(arr.shift());

  let decryptedMessages = [];

  let startPattern = /[star]/gi;
  let planetPattern =
    /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

  for (let i = 0; i < numberMessages; i++) {

    let currentMessage = arr[i];
    let decryptedMessage = "";

    let matches = currentMessage.match(startPattern);

    if (matches) {
      let count = matches.length;

      for (let char of currentMessage) {
        let code = char.charCodeAt();
        code -= count;

        let newChar = String.fromCharCode(code);

        decryptedMessage += newChar;
      }

    } else {
      decryptedMessage = currentMessage;
    }
    decryptedMessages.push(decryptedMessage);
  }

  let attackedPlanets = [];
  let destroyedPlanets = [];

  for (let planet of decryptedMessages) {
    let match = planet.match(planetPattern);

    if (match) {
      let { name, type } = match.groups;

      if (type == "A") {
        attackedPlanets.push(name);
      } else {
        destroyedPlanets.push(name);
      }
    }
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));
}

//starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma([
  "3",

  "tt(''DGsvywgerx>6444444444%H%1B9444",

  "GQhrr|A977777(H(TTTT",

  "EHfsytsnhf?8555&I&2C9555SR",
]);

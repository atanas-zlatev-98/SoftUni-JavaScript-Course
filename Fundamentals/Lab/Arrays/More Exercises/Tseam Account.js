function account(arr) {
  let account = arr[0].split(" ");

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i].split(" ");
    let command = currentElement[0];
    let game = currentElement[1];
    
    if (command == "Play") {
      break;
    } else if (command == "Install" && account.includes(game) === false) {
      account.push(game);
    } else if (command == "Uninstall" && account.includes(game)) {
      let getIndex = account.indexOf(game);
      account.splice(getIndex, 1);
    } else if (command == "Update" && account.includes(game)) {
      let getIndex = account.indexOf(game);
      account.splice(getIndex, 1);
      account.push(game);
    } else if (command == "Expansion") {
      let expansion = game.split("-");
      let newGame = expansion[0];

      if (account.includes(newGame)) {
        let expandedGame = expansion.join(":");
        let index = account.indexOf(newGame);
        account.splice(index + 1, 0, expandedGame);
      }
    }
  }

  console.log(account.join(' '));
}

account([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);

account(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!']);

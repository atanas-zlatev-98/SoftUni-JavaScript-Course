function muOnline(arr) {
  let commands = arr.split("|");

  let health = 100;
  let bitcoins = 0;
  let roomCounter = 0;

  for (let i = 0; i < commands.length; i++) {
    roomCounter++;
    let splitCommands = commands[i].split(" ");
    let currentCommand = splitCommands[0];
    let altCommand = Number(splitCommands[1]);

    if (currentCommand == "potion") {

      if (health + altCommand > 100) {
        altCommand = 100 - health;
        health = 100;
      } else {
        health += altCommand;
      }

      console.log(`You healed for ${altCommand} hp.`);
      console.log(`Current health: ${health} hp.`);

    } else if (currentCommand == "chest") {
      console.log(`You found ${altCommand} bitcoins.`);
      bitcoins += altCommand;
    } else {
      health -= altCommand;

      if (health > 0) {
        console.log(`You slayed ${currentCommand}.`);
      } else {
        console.log(`You died! Killed by ${currentCommand}.`);
        console.log(`Best room: ${roomCounter}`);
        break;
      }
    }
  }

  if(health > 0){
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

//muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

function dungeonestDark(arr) {
  let rooms = arr[0];
  let room = rooms.split("|");

  let health = 100;
  let coins = 0;
  let roomCounter = 1;

  for (let i = 0; i < room.length; i++) {
    let command = room[i];
    let word = command.split(" ");
    let number = Number(word[1]);
    let commands = word[0];

    if (commands == "potion") {

        if(health + number > 100){
            number = 100 - health;
            health = 100;
        }else {
            health += number;
        }
      console.log(`You healed for ${number} hp.`);
      console.log(`Current health: ${health} hp.`);

    } else if (commands == "chest") {
      console.log(`You found ${number} coins.`);
      coins += number;
    } else {
      if (health > 0) {
        health -= number;
        if (health <= 0) {
          console.log(`You died! Killed by ${commands}.`);
          break;
        } else {
          console.log(`You slayed ${commands}.`);
        }
      }
    }
    roomCounter++;
  }
  if(health>0){
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`);
  }else {
    console.log(`Best room: ${roomCounter}`);
  }
  
}

//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
function movingTarget(arr) {

  let targets = arr.shift().split(" ").map(Number);

  let commands = arr.shift();

    while (commands !== "End") {

        let tokens = commands.split(' ');

        let command = tokens[0];
        let index = Number(tokens[1]);
        let value = Number(tokens[2]);

      if (command == "Shoot") {

        if (typeof targets[index] !== "undefined") {
          targets[index] -= value;

          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }

      } else if (command == "Add") {

        if (typeof targets[index] !== "undefined") {
          targets.splice(index,0,value)
        } else {
          console.log(`Invalid placement!`);
        }

      } else if (command == "Strike") {

        let radius = 1 + value * 2;
        let startIndex = index - value;
        let endIndex = index + value;

        if (typeof targets[startIndex] !== "undefined" && typeof targets[endIndex] !== "undefined") {
          targets.splice(startIndex, radius);
        } else {
          console.log(`Strike missed!`);
        }

      } 

      commands = arr.shift();

    }
    console.log(`${targets.join("|")}`);  
}
  

//movingTarget(["52 74 23 44 96 110","Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","End",]);
movingTarget(["1 2 3 4 5","Strike 0 1","End"]);


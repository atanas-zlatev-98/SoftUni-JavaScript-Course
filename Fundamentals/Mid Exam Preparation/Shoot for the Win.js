function shoot(arr) {
  let targets = arr.shift().split(" ").map(Number);

  let command = arr.shift();
  let targetsShot = 0;

  while (command !== "End") {
    
    let index = Number(command);

    if (typeof targets[index] !== "undefined") {

      for (let i = 0; i < targets.length; i++) {

        let currentTarget = targets[index];

        if (i !== index && targets[i] !== -1) {

          if (targets[i] > currentTarget) {

            targets[i] -= currentTarget;

          } else {

            targets[i] += currentTarget;

          }

        }

      }

      targets[index] = -1;
      targetsShot++;
    }
    command = arr.shift();
  }

  console.log(`Shot targets: ${targetsShot} -> ${targets.join(' ')}`);
}

shoot(["30 30 12 60 54 66","5","2","4","0","End"])

shoot(["24 50 36 70", "0", "4", "3", "1", "End"]);

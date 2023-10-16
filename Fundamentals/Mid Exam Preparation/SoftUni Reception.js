function reception(arr) {

  let studentsCount = Number(arr.pop());
  let allStudent = arr.map(Number).reduce((a, b) => a + b);
  let hours = 0;

  while (studentsCount > 0) {
        studentsCount -= allStudent;
        hours++;

        if (hours % 4 === 0) {
            hours++;
          }
  }

  console.log(`Time needed: ${hours}h.`);
}

reception(["1", "2", "3", "45"]);
reception(['5','6','4','20']);
reception(['3','2','5','40'])

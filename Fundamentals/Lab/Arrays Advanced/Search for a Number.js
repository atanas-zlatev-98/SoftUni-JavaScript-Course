function search(arrOne, arrTwo) {
  let orginalArr = arrOne;

  let elementsToTake = arrTwo[0];
  let elementsToDelete = arrTwo[1];
  let searchNumbers = arrTwo[2];

  let counter = 0;

  let takenElements = orginalArr.splice(0, elementsToTake);

  takenElements.splice(0, elementsToDelete);

  takenElements.filter((number) => number == searchNumbers ? counter++ : null);

  /*for (let i = 0; i < takenElements.length; i++) {
    if (takenElements[i] == searchNumbers) {
      counter++;
    }
  }*/

  console.log(`Number ${searchNumbers} occurs ${counter} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);

function worldTour(arr) {
  let destination = arr.shift();

  while (arr[0] !== "Travel") {
    let currentStop = arr[0];
    arr.shift();

    if (currentStop.includes("Add Stop")) {
      let tokens = currentStop.split(":");
      tokens.shift();

      let [idx, newPlace] = tokens;
      idx = Number(idx);

      if (typeof destination[idx] !== "undefined") {
        destination = destination.slice(0, idx) + newPlace + destination.slice(idx);
      }

    } else if (currentStop.includes("Remove")) {
      let tokens = currentStop.split(":");
      tokens.shift();

      let [startIndex, endIndex] = tokens.map(Number);

      if (typeof destination[startIndex] !== "undefined" && typeof destination[endIndex] !== "undefined") {
        
        let elementsToDelete = endIndex - startIndex;

        let modifiedArr = destination.split("");
        modifiedArr.splice(startIndex, elementsToDelete + 1);
        let modifiedArray = modifiedArr.join("");

        destination = modifiedArray;

      }
    } else if (currentStop.includes("Switch")) {
        let tokens = currentStop.split(':');
        tokens.shift();
        let [oldPlace,newPlace] = tokens;

        destination = destination.replace(oldPlace,newPlace);
    }
    console.log(destination);
  }
  console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

function worldTour(arr) {
  let destination = arr.shift();

  while (arr[0] !== "Travel") {
    let currentStop = arr[0];
    arr.shift();

    if (currentStop.includes("Add Stop")) {
      let tokens = currentStop.split(':');
      let idx = Number(tokens[1]);
      let idxString = tokens[2];

      if (typeof destination[idx] !== "undefined") {
        destination =
          destination.slice(0, idx) + idxString + destination.slice(idx);
      }
      
    } else if (currentStop.includes("Remove Stop")) {
        let tokens = currentStop.split(':');
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        
      if (typeof destination[startIndex] !== "undefined" && typeof destination[endIndex] !== "undefined") {
        let newArr = destination.split("");
        let toDelete = endIndex - startIndex;
        newArr.splice(startIndex,toDelete + 1 )
        let newArray = newArr.join("")
        destination = newArray;
      }
    } else if (currentStop.includes("Switch")) {
        let tokens = currentStop.split(':');
        let firstPlace = tokens[1];
        let secondPlace = tokens[2];

       if(destination.includes(firstPlace)){
        destination = destination.replace(firstPlace,secondPlace);
       }

    }
    console.log(destination);
  }

  console.log(`Ready for world tour! Planned stops: ${destination}`)
}

/*worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);*/

worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
)

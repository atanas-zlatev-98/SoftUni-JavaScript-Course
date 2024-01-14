function addRemoveElements(arr) {
  let result = [];
  let count = 0;

  for (let command of arr) {
    count++;
    if (command == "add") {
      result.push(count);
    } else if (command == "remove") {
      result.pop();
    }
  }

  result.length <= 0 ? console.log('Empty') :  result.map((number) => {console.log(number)});

}

//addRemoveElements(["add", "add", "add", "add"]);
//addRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove'])

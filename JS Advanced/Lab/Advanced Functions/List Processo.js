function listProcessor(input) {

  let result = [];

  let commands = {
    add,
    remove,
    print,
  };

  for (let data of input) {
    let [comm, value] = data.split(" ");
    commands[comm](value);
  }

  function add(str) {
    return result.push(str);
  }

  function remove(str) {
     let removedValue = result.filter((word) => word !== str);
     result = removedValue;
     return result;
  }

  function print() {
    console.log(result.join(","));
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);

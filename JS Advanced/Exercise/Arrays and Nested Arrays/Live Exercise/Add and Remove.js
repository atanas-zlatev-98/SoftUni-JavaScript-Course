function addAndRemove(commands) {
    
  let n = 1;
  let result = [];

  commands.forEach((x) => {
    x === "add" ? result.push(n) : result.pop();
    n++;
  });

  return result.length ? result.join("\n") : "Empty";
}

addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);

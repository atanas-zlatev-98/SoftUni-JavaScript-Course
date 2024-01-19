function extract(content) {
  const pattern = /\(([^)]+)\)/g;

  const list = document.getElementById(content).textContent;

  let match = pattern.exec(list);
  let result = [];

  while (match !== null) {
    result.push(match[1]);
    match = pattern.exec(list);
  }

  return result.join("; ");
}

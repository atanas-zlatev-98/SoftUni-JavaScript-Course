function lastKSequence(n, k) {
  let result = [1];

  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let end = i + k;

    let currentElement = result.slice(start, end).reduce((a, b) => a + b, 0);
    result.push(currentElement);
  }

  console.log(result.join(" "));
}

lastKSequence(6, 3);
lastKSequence(8, 2);

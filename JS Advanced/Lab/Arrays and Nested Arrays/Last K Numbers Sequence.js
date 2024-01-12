function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i++) {
      let start = Math.max(0, i - k);
      let end = i + k;
  
      let current = result.slice(start, end).reduce((acc, curr) => acc + curr);
      result.push(current);
    }
  
    return result;
  }
  
lastKNumbersSequence(6, 3);
//lastKNumbersSequence(8, 2);

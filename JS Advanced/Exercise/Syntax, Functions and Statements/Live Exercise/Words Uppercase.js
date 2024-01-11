function wordsUpperCase(text) {
  return text
      .split(/[^a-zA-Z0-9]+/)
      .join(" ")
      .trim()
      .split(" ")
      .map((x) => x.toUpperCase())
      .join(", ")
}

console.log(wordsUpperCase("Hi, how are you?"));
console.log(wordsUpperCase("hello"));

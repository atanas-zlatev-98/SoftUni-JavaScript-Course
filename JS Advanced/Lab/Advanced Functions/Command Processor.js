function commandProcessor() {
  let text = "";

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(name) {
    return (text = text + name);
  }
  function removeStart(n) {
    n = Number(n);
    return (text = text.slice(n));
  }
  function removeEnd(n) {
    n = Number(n);
    let toSlice = text.length - n;
    return (text = text.slice(0, toSlice));
  }

  function print() {
    console.log(text);
  }
}

let firstZeroTest = commandProcessor();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = commandProcessor();
secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

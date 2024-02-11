function calculator() {
  let numberOne;
  let numberTwo;
  let result;

  function init(selector1, selector2, resultSelector) {
    numberOne = document.querySelector(selector1);
    numberTwo = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
  }

  function add() {
    result.value = Number(numberOne.value) + Number(numberTwo.value);
    return result.value;
  }

  function subtract() {
    result.value = Number(numberOne.value) - Number(numberTwo.value);
    return result.value;
  }

  return {
    init,
    add,
    subtract,
  };
}

function validate() {

  let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

  const inputRef = document.getElementById("email");

  inputRef.addEventListener("change", (e) => {
    pattern.test(e.target.value)
      ? e.target.classList.remove("error")
      : e.target.classList.add("error");
  });
}

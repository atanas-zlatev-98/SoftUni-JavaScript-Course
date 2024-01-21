function toggle() {
  const button = document.getElementsByClassName("button")[0];
  const extra = document.getElementById("extra");
    const buttonText = button.textContent;
    if (buttonText == "More") {

      extra.style.display = "block";
      button.textContent = "Less";

    } else if (buttonText == "Less") {

      extra.style.display = "none";
      button.textContent = "More";

    }
}

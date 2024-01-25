function lockedProfile() {
  const buttons = document.querySelectorAll("button");

  for (let btn of buttons) {
    btn.addEventListener("click", showInfo);
  }

  function showInfo(e) {
    let radio = e.target.parentElement.querySelectorAll(
      'input[type="radio"]:checked'
    )[0];

    let hiddenInfo = e.currentTarget.parentElement.querySelectorAll("div")[0];
    let showMoreBtn = e.currentTarget;

    if (radio.value === "unlock") {
      if (showMoreBtn.textContent === "Show more") {
        hiddenInfo.style.display = "block";
        showMoreBtn.textContent = "Hide it";
      } else {
        hiddenInfo.style.display = "none";
        showMoreBtn.textContent = "Show more";
      }
    }
  }
}

function attachGradientEvents() {
  let result = document.getElementById("result");
  const box = document.getElementById("gradient");

  box.addEventListener("mousemove", (e) => {
    const boxWidth = e.target.clientWidth;
    const percent = Math.trunc((e.offsetX / (boxWidth - 1)) * 100);
    result.textContent = `${percent}%`;
  });

  box.addEventListener("mouseout", () => {
    result.textContent = "";
  });
}

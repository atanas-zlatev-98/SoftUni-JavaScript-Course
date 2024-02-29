function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const spanInfoRef = document.querySelector(".info");
  const baseUrl = "http://localhost:3030/jsonstore/bus/schedule/";

  const stop = {
    currentStop: "",
    nextStop: "depot",
  };

  async function depart() {
    const response = await fetch(baseUrl + stop.nextStop);
    const data = await response.json();

    stop.currentStop = data.name;
    stop.nextStop = data.next;

    spanInfoRef.textContent = `Next stop ${stop.currentStop}`;

    departBtn.disabled = true;
    arriveBtn.disabled = false;
  }

  function arrive() {
    spanInfoRef.textContent = `Arriving at ${stop.currentStop}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

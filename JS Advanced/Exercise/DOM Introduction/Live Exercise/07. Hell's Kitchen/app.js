function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const textAreaRef = document.querySelector("textarea");
  const bestRestourantInfo = document.querySelector("#bestRestaurant p");
  const bestRestourantWorkersInfo = document.querySelector("#workers p");

  function onClick() {
    let data = JSON.parse(textAreaRef.value);
    let result = {};

    for (let line of data) {
      let [name, workers] = line.split(" - ");

      if (!result.hasOwnProperty(name)) {
        result[name] = {
          avarageSalary: 0,
          bestSalary: 0,
          workers: [],
        };
      }
      let currentWorkers = getArrayWorkers(workers, result[name].workers);
      result[name].workers = sortWorkers(currentWorkers);
      updateSalary(result[name]);
    }

    let bestRestourant = findBestRestourant(result);
    appendBestRestaurantInfo(bestRestourant);
    

    appendBestRestaurantWorkersInfo(bestRestourant[1].workers);
  }

  function appendBestRestaurantWorkersInfo(workers) {
   let buff = '';
   workers.forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `)
   bestRestourantWorkersInfo.textContent = buff;
  }

  function appendBestRestaurantInfo(data) {
     bestRestourantInfo.textContent = `Name: ${data[0]} Average Salary: ${(data[1].avarageSalary).toFixed(2)} Best Salary: ${(data[1].bestSalary).toFixed(2)}`;
  }

  function findBestRestourant(restourants) {
    return Object.entries(restourants).sort((a, b) => {
      return b[1].avarageSalary - a[1].avarageSalary;
    })[0];
  }

  function sortWorkers(workers) {
    return workers.sort((workerA, workerB) => workerB.salary - workerA.salary);
  }

  function getArrayWorkers(workersData, exsistWorker) {
    let arrOfWorkers = workersData.split(", ");

    for (let tokens of arrOfWorkers) {
      let [name, salary] = tokens.split(" ");
      salary = Number(salary);
      exsistWorker.push({ name, salary });
    }
    return exsistWorker;
  }

  function updateSalary(restourant) {
   debugger
    let sumOfSalary = 0;
    let bestSalary = 0;
    restourant.workers.forEach((worker) => {
      sumOfSalary += worker.salary;
      if (bestSalary < worker.salary) {
        bestSalary = worker.salary;
      }
    });
    restourant.bestSalary = bestSalary;
    restourant.avarageSalary = sumOfSalary / restourant.workers.length;
  }
}

/*
["PizzaHut - Peter

500, George 300, Mark

800",

"TheLake - Bob 1300,

Joe 780, Jane 660"]
*/

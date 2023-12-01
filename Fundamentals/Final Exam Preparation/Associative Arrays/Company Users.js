function companyUsers(arr) {
  let data = {};

  for (let emp of arr) {
    let [company, empId] = emp.split(" -> ");

    if (!data.hasOwnProperty(company)) {
      data[company] = [];
    }

    if (!data[company].includes(empId)) {
      data[company].push(empId);
    }
  }
  let sorted = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [key, value] of sorted) {
    console.log(key);
    for (let emp of value) {
      console.log(`-- ${emp}`);
    }
  }
}
/*companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);*/

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);

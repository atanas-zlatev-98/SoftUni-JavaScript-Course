function companyUsers(arr) {
  let companyUsers = {};

  for (let company of arr) {
    let [companyName, userId] = company.split(" -> ");

    if (companyName in companyUsers) {
      if (!companyUsers[companyName].includes(userId)) {
        companyUsers[companyName].push(userId);
      }
    } else {
      companyUsers[companyName] = [userId];
    }
  }
  let entries = Object.entries(companyUsers).sort((a, b) => 
    a[0].localeCompare(b[0]));

  for (let [name, usersId] of entries) {
    console.log(name);
    usersId.forEach((id) => console.log(`-- ${id}`));
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

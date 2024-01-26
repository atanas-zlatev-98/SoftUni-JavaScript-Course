function filter(data, personCriteria) {

  let parsedData = JSON.parse(data);
  let result = [];
  let [criteria, criteriaValue] = personCriteria.split("-");

  for (let data of parsedData) {
    filter.call(data);
  }

  function filter(){
    if(this[criteria] === criteriaValue || criteriaValue === 'all'){
        return result.push(`${this['first_name']} ${this['last_name']} - ${this['email']}`);
    }
  }

  result.forEach((person, i) => {
    return console.log(`${i}. ${person}`);
  });
}
filter(
  `[{

        "id": "1",
        
        "first_name": "Kaylee",
        
        "last_name": "Johnson",
        
        "email": "k0@cnn.com",
        
        "gender": "Female"
        
        }, {
        
        "id": "2",
        
        "first_name": "Kizzee",
        
        "last_name": "Johnson",
        
        "email": "kjost1@forbes.com",
        
        "gender": "Female"
        
        }, {
        
        "id": "3",
        "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  "last_name-Johnson"
);

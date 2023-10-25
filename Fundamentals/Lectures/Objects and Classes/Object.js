let peter = {
  name: "Peter",
  age: 20,
  height: 183,
};

/*printDetails(peter);

function printDetails(person){

    console.log(person.name);

}*/

console.log(peter)

peter.hairColor = 'brown';

console.log(peter);
console.log(peter['name']);

let propName = 'name';
console.log(peter[propName]);
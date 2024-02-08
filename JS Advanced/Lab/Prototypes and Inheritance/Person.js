function createPerson(firstName,lastName){
const person = {
    firstName,
    lastName,
}

Object.defineProperty(person,'fullName',{
    enumerable: true,
    configurable: true,
    get(){
        return `${person.firstName} ${person.lastName}`;
    },
    set(value){
        [person.firstName,person.lastName] = value.split(' ');
    }
})

return person;
}

const myPerson = createPerson('Peter','Johnson');
console.log(myPerson);
console.log(myPerson.fullName);
myPerson.lastName = 'Peterson';
console.log(myPerson.fullName);
myPerson.fullName = 'Nick IDK'
console.log(myPerson.fullName);
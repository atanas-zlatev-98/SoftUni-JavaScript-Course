class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName,lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

const myPerson = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(myPerson.toString());
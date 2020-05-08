class Person {
    constructor(firstName, lastName, id) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    } 
}

var johnDoe = new Person('John', 'Doe', 5566)
console.log(johnDoe.fullName())

var ccc = new Person('Chung-Chen', 'Chen', 1122)
console.log(ccc.fullName())

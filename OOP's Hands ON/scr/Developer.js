// Developer.js
const Employee = require("./Employee");

class Developer extends Employee {
    constructor(id, name, salary) {
        super(id, name); // call Employee constructor
        this.salary = salary;
    }

    doWork() {
        console.log(`${this.name} is writing code`);
    }

    computePay() {
        return this.salary;
    }
}

module.exports = Developer;

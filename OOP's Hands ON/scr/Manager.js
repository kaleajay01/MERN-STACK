// Manager.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, salary, bonus) {
        super(id, name);
        this.salary = salary;
        this.bonus = bonus;
    }

    doWork() {
        console.log(`${this.name} is managing the team`);
    }

    computePay() {
        return this.salary + this.bonus;
    }
}

module.exports = Manager;

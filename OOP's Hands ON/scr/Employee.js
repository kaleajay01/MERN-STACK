// Employee.js
class Employee {
    constructor(id, name) {
        if (new.target === Employee) {
            throw new Error("Employee is an abstract class and cannot be instantiated");
        }
        this.id = id;
        this.name = name;
    }

    doWork() {
        throw new Error("doWork() must be implemented by child class");
    }

    computePay() {
        return 0;
    }

    toString() {
        return `Employee [${this.constructor.name}]
Id: ${this.id}
Name: ${this.name}`;
    }
}

module.exports = Employee;

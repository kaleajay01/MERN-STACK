const Developer = require("./scr/Developer");
const Manager = require("./scr/Manager");
const dev = new Developer(1, "Alice", 5000);
const mgr = new Manager(2, "Bob", 7000, 2000);

dev.doWork(); 
mgr.doWork(); 

console.log(dev.computePay()); 
console.log(mgr.computePay()); 

console.log(dev.toString());
console.log(mgr.toString());
var fs = require('fs');
var fileName = "./data.txt";
var dataToWrite = "This is the new data to be written to the file.\n";
var dataToAppend = "This data will be appended to the file.\n";
var onFileWrite = function (err) {
    if (err) {
        throw err;
    }
    console.log("Data has been written to the file successfully.");
    fs.appendFile(fileName, dataToAppend, function (err) {
        if (err) {
            throw err;
        }
        console.log("Data has been appended successfully.");
    });
};
fs.writeFile(fileName, dataToWrite, onFileWrite);
console.log("Write operation initiated.");
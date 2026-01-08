var fs = require('fs');
var fileName = "D:/ClassTFL/data.txt";
var onfileRead = function(err, data){
    if(err){
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("Data from file:-");
    console.log(data.toString());
}
fs.readFile(fileName, onfileRead);
const express = require('express');
const path = require('path');
const app = express();
const staticFolder = express.static(path.join(__dirname, "Public"));
app.use(staticFolder);

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/index.html");
})

app.get("/design",(request, response)=>{
    var design = [
        {"id":1, "title":"Wedding design", "price":500},
        {"id":2, "title":"Wedding design", "price":500},
        {"id":3, "title":"Wedding design", "price":500},
        {"id":4, "title":"Wedding design", "price":500},
    ];
    response.send(design);

})

app.listen(9921)
console.log("i created app in express")
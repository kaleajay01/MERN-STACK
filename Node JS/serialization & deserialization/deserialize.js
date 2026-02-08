const fs = require("fs");

const jsonData = fs.readFileSync("product.json", "utf-8");
const product = JSON.parse(jsonData);

console.log("Product Object (Deserialized):");
console.log(product);
console.log(product.name);
console.log(product.price);



app.get("/product", (req, res) => {

  const data = fs.readFileSync("product.json", "utf-8");

  res.json(JSON.parse(data));
});

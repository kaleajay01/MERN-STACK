const fs = require("fs");

const product = {
  id: 101,
  name: "Laptop",
  price: 55000
};

const jsonData = JSON.stringify(product);
fs.writeFileSync("product.json", jsonData);
console.log("Product saved to file (Serialized)");




//express
app.post("/product", (req, res) => {

  const data = JSON.stringify(req.body, null, 2);

  fs.writeFileSync("product.json", data);

  res.send("Saved");
});

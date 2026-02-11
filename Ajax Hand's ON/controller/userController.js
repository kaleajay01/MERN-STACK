const userModel = require('../reposi/userRepository');
console.log("USER MODEL EXPORTS:", userModel);


exports.addUser = (req, res) => {
  const { name, contact } = req.body;
  userModel.addUser(name, contact, (err, data) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({
        message: "User added successfully",
        id: data.insertId
      });
    }
  });
};

exports.allUser = (req, res) => {
  userModel.getAllUser((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
    console.log("record fetched");
  });
};

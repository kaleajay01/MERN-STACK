const userRepo = require('../reposi/userRepository');

exports.addUsers = (name, contact, result) => {
    userRepo.addUser(name, contact, result);
};

exports.allUser = (id, name, contact, result) => {
    userRepo.allUser(id,name,contact, result);
};
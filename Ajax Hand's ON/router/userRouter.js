const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');

router.post('/user', controller.addUser);

router.get('/allUser',controller.allUser);

module.exports = router;

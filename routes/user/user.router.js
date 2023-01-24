var express = require('express');
const userController = require("../../controllers/user/users.controller")
var router = express.Router();

/* GET home page. */
router.post('/createUser', userController.createUser);
// router.post('/signup', authenticationController.registration);
// router.post('/create', authenticationController.createUser);

module.exports = router;

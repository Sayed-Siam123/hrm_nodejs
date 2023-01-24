var express = require('express');
const authenticationController = require("../../controllers/authentication/authenticationController")
var router = express.Router();

/* GET home page. */
router.post('/login', authenticationController.login);
router.post('/signup', authenticationController.registration);
router.post('/create', authenticationController.createUser);

module.exports = router;

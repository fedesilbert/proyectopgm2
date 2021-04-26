var express = require('express');
var registerController = require('../controllers/registerController');
var router = express.Router();
router.get("/login", registerController.registro)


module.exports = router;
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', usersController.register)
router.get('/login', usersController.login)

module.exports = router;

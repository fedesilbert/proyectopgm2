var express = require('express');
var router = express.Router();
var profileEditController = require('../controllers/profileEditController')

router.get('/', profileEditController.profileEdit)

module.exports = router;
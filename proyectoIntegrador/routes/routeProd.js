var express = require('express');
var router = express.Router();
let productController= require('../controllers/productosController')

router.get('/', productController.index)
router.get('/:id',productController.show)


module.exports = router;
var express = require('express');
var router = express.Router();
var resultadoBusquedaController = require('../controllers/resultadoBusquedaController')

router.get('/', resultadoBusquedaController.resultadoBusqueda)

module.exports = router;
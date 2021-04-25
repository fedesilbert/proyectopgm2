let product = require('../views/product');
const productController = {
    main: function(){
        return res.send(product.body)
    }   



    
}
module.exports = productController;
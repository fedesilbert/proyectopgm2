let product = require('../modules/products');
const productController = {
    main: function(){
        return res.send(product.body)
    }   



    
}
module.exports = productController;
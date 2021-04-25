const products = require('../modules/products');
let product = require('../modules/products')
const productController = {
    index: function(req, res, next){
        res.render('product',
        {
            novedades: products.novedades,
        });
    }
}
    
module.exports= productController;
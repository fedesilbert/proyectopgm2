var products = require('../modules/products')
const productController = {
    index: function(req, res, next){
        res.render('product',{title: 'Express'});
    },
    show: function(req, res, next){
        let product=null
        for (let i = 0; i< products.length; i++) {
         if (products[i].id== req.params.id) {
             product= products[i];
             }
        } 
        res.render('product',{
        product: product
    });
    }
   
}
    
module.exports= productController;
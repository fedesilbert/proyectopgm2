
const productController = {
    index: function(req, res, next){
        res.render('product',{title:'Express' });
    },
    show: function(req, res, next){
        res.render('product',{product: products[req.params.id] });
    }
}
    
module.exports= productController;

let usersController = {
'register': function(req,res,next){
    res.render("register")
},
'login': function(req,res,next){
    res.render("login")
 
}

}
module.exports = usersController;
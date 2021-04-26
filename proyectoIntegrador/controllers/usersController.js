
const usersController = {
'register': function(req, res, next){
    res.render('register', {register: login})
},
'login': function(req, res, next){
    res.render('login', {login: login})
 
}

}
module.exports = usersController;
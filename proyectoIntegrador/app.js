var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var routeProd = require('./routes/routeProd');
var login = require('./routes/login');
var productAdd = require('./routes/product-add');
var profileEdit = require('./routes/profile-edit');
var profile = require('./routes/profile');
var register = require('./routes/register');
var resultadoBusqueda = require('./routes/resultadoBusqueda');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/routeProd', routeProd);
app.use('/login', login);
app.use('/product-add', productAdd );
app.use('/profile-edit', profileEdit );
app.use('/profile', profile );
app.use('/register', register);
app.use('/resultadoBusqueda', resultadoBusqueda );



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;

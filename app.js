// Import modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

// Import controllers
var index = require('./server/controllers/index');
var data = require('./server/controllers/data')

// Create server
var app = express();
var serverPort = 3000;
var httpServer = require('http').Server(app);

// Setup view engine (EJS)
app.set('views', path.join(__dirname, 'client/views/pages'));
app.set('view engine', 'ejs');

// Use middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));


// Setup public directory (resources)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));


// Routes
// Index page route 
app.get('/', index.show);

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
console.log(data.show)


// // Errors catch and error handlers
// // Catch 404 error and forward it to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // Catch production errors and forward it to error handler. No stacktraces leaked to user
// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


// Setup Server
app.set('port', serverPort);
var server = httpServer.listen(app.get('port'), function () {
    console.log('HTTP Server listening on port ' + server.address().port);
});


// Exports: app
module.exports = app;

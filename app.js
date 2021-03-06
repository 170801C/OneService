// Import modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');

// Import controllers
var index = require('./server/controllers/index');
var data = require('./server/controllers/data');
var result = require('./server/controllers/result');
var booking = require('./server/controllers/booking')
var booking2 = require('./server/controllers/booking2')
var note = require('./server/controllers/note');
var list_booking = require('./server/controllers/list_booking')
var list_booking2 = require('./server/controllers/list_booking2')


// Create server
var app = express();
var serverPort = 3000;
var httpServer = require('http').Server(app);

// Store session 
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var models = require("./server/models");
var sequelize = models.sequelize

// Session store sync
var myStore = new SequelizeStore({
    db: sequelize
})
myStore.sync();

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
app.get('/', index.show);
app.get('/result', result.show);
app.get('/booking', booking.show);
app.get('/booking2', booking2.show)
app.get('/list_booking', list_booking.show)
app.get('/list_booking2', list_booking2.show)
app.get('/note', note.show)


// Errors catch and error handlers
// Catch 404 error and forward it to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Catch production errors and forward it to error handler. No stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


// Setup Server
app.set('port', serverPort);
var server = httpServer.listen(app.get('port'), function () {
    console.log('HTTP Server listening on port ' + server.address().port);
});


// Exports: app
module.exports = app;

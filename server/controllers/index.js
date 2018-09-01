// Import modules
var data = require('./data')


// Exports: show 
exports.show = function (req, res) {
    console.log("sgsdgs")
    res.render('index', {           // Render index.ejs template 
        title: 'OneService',        // Pass data to title field in template
    });
};

// Exports: show 
exports.show = function (req, res) {
    res.render('index', {         // Render index.ejs template 
        title: 'OneService'       // Pass data to title field in template
    });
};

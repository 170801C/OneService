exports.show = function (req, res) {
    res.render('result', {           // Render index.ejs template 
        title: 'Search Result',        // Pass data to title field in template
    });
};
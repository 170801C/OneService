exports.show = function (req, res) {
    res.render('index', {           // Render index.ejs template 
        title: 'One Booking',        // Pass data to title field in template
    });
};

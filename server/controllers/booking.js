var Models = require('../models')
var Bookings = Models.Bookings
var Facilities = Models.Facilities


exports.show = function (req, res) {
    // Models.sequelize.query(`select * from Facilities where....`, { model: Facilities})
    // .then((facility) => {
    res.render('booking', {           // Render index.ejs template 
        title: 'One Booking',        // Pass data to title field in template
        // facilities: facility
    })
        .catch((err) => {
            return res.status(400).send({
                message: err
            });
        });
};

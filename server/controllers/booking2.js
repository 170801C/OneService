var Models = require('../models')
var Bookings = Models.Bookings
var Facilities = Models.Facilities


exports.show = function (req, res) {
    // Models.sequelize.query(`select * from Facilities where....`, { model: Facilities})
    // .then((facility) => {
    res.render('booking2', {
        title: 'One Booking',
        // facilities: facility
    })
        .catch((err) => {
            return res.status(400).send({
                message: err
            });
        });
};

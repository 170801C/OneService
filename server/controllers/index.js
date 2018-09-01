var Models = require('../models')
var Facilities = Models.Facilities


exports.show = function (req, res) {
    Models.sequelize.query(`select * from Facilities`, { model: Facilities})
    .then((facility) => {
        res.render('index', {           // Render index.ejs template 
            title: 'One Booking',        // Pass data to title field in template
            facilities: facility
        })
    }) 
    .catch((err) => {
        return res.status(400).send({
            message: err
        });
    });
};

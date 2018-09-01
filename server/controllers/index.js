var Facilities = require('../models/Facilities')

exports.show = function (req, res) {
    sequelize.query(`select * from Facilities`, { model: Facilities})
        .then((facility) => {
            res.render('index', {           // Render index.ejs template 
                title: 'OneService',        // Pass data to title field in template
                facilities: facility
            })
        }) 
        .catch((err) => {
            return res.status(400).send({
                message: err
            });
        });
};

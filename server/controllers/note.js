exports.show = function (req, res) {
    // Models.sequelize.query(`select * from Facilities where....`, { model: Facilities})
    // .then((facility) => {
    res.render('note', {
        title: 'Notification',
        // facilities: facility
    })
    .catch((err) => {
        return res.status(400).send({
            message: err
        });
    });
};
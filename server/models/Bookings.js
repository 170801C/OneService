module.exports = function (sequelize, Sequelize) {
    var Bookings = sequelize.define('Bookings', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
            trim: true
        },
        time: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true
        }
    })

    Bookings.sync({ force: false, logging: console.log })
    .then(() => {
        Bookings.upsert({
            id: 1,
            date: "2018-06-28 11:10:11.3160000 +00:00",
            time: "8AM-9AM"
        })
        return console.log("Facilities synced");
    })
    return Bookings
};

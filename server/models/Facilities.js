module.exports = function (sequelize, Sequelize) {
    var Facilities = sequelize.define('Facilities', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        image:{
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            trim: true,
        },
        type: {
            type: Sequelize.STRING,
            trim: true,
        },
        desc:{
            type: Sequelize.STRING,
            trim: true,
        },
        price: {
            type: Sequelize.FLOAT(10, 2),
            allowNull: false,
        },
        address:{
            type: Sequelize.STRING,
            trim: true,
        },
        share:{
            type:Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        postal:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        lat:{
            type: Sequelize.FLOAT(20, 10),
            allowNull: false,
        },
        lng:{
            type: Sequelize.FLOAT(20, 10),
            allowNull: false,
        }
    });
    Facilities.sync({ force: false, logging: console.log })
    .then(() => {
        return console.log("Facilities synced");
    });
    return Facilities
};
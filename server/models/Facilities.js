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
        contact: {
            type: Sequelize.INTEGER,
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
        operating_hours: {
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
        Facilities.upsert({
            id: 1,
            image: '/public/images/bishan sports hall1.jpg',
            contact: 63526631,
            type: 'Court 01',
            name: 'Bishan Sports Hall',
            desc: 'Bishan Sports Hall is a public sports hall managed by Sport Singapore. \nFacility Information: 4 Badminton Courts, 9 Table-Tennis Tables, 1 Gymnastic Arena',
            price: 3.50,
            address: '5 Bishan Street 14, Singapore 579783',
            operating_hours: 'Daily 7PM-10PM',
            share: 5,
            postal: 579783,
            lat: 1.353940,
            lng: 103.850390
        })

        return console.log("Facilities synced");
    })
    return Facilities
};
const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../options");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
});
class User extends Model { }
User.init({
    code: {
        type: DataTypes.INTEGER,
    },
    fullname: {
        type: DataTypes.STRING,
    },
    brand: {
        type: DataTypes.STRING,
    },
    number: {
        type: DataTypes.INTEGER,
    },
    color: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: "User",
    createdAt: false,
    updatedAt: false,
});

module.exports = User;
const { Sequelize, DataTypes, Model } = require("sequelize");
const options = require("../options");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: options.dbPath,
});

class User extends Model { }
User.init({
    code: {
        type: DataTypes.STRING,
    },
    fullname: {
        type: DataTypes.STRING,
        validate: {
            len: [10, 50]
        }
    },
    brand: {
        type: DataTypes.STRING,
    },
    number: {
        type: DataTypes.STRING,
        validate: {
            len: [8,12]
        }
    },
    color: {
        type: DataTypes.STRING,
    }

}, {
    sequelize,
    modelName: "User",
    updatedAt: false,
});

module.exports = User;
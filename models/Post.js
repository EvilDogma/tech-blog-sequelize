const sequelize = require('../config/client')
const { DataTypes, Model } = require('sequelize')


class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'post'
    }
)

module.exports = Post
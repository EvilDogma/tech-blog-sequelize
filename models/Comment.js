const sequelize = require('../config/client')
const { DataTypes, Model } = require('sequelize')

class Comment extends Model { }

Comment.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'comment'
    }
)

module.exports = Comment
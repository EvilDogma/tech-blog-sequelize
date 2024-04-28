const client = require('../db/client')
const { DataTypes, Model } = require('sequelize')

class Comment extends Model { }

Comment.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 20]
        }
    }

},
{
    sequelize: client,
    modelName: 'comment'
}
)

module.exports = Comment
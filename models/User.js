const client = require('../db/client')
const { DataTypes, Model } = require('sequelize')

class User extends Model { }

User.init({
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
    modelName: 'user'
}
)

module.exports = User
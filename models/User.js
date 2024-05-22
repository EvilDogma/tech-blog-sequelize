const sequelize = require('../config/client')
const { hash, compare } = require('bcrypt')
const { DataTypes, Model } = require('sequelize')

class User extends Model {
    async validatePass(formPassword) {
        const is_valid = await compare(formPassword, this.dataValues.password)
        return is_valid
    }
 }

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: 6
            }
        }
    },
    {
        sequelize,
        hooks: {
            async beforeCreate(user) {
                user.password = await hash(user.password, 10)
            }
        },
        modelName: 'user',
        scopes: {
            withoutPassword: {
              attributes: { exclude: ['password'] },
            }
          }  
    }
)

module.exports = User
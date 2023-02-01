const { User, UserSchema } = require('./user.model')

function setupUserModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setupUserModels
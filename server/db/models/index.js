const User = require('./user')
const Track = require('./track')

Track.belongsTo(User)
User.hasMany(Track)

module.exports = {
  User,
  Track
}

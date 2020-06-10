const Sequelize = require('sequelize')
const db = require('../db')

const Track = db.define('track', {
  trackName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  trackURL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://www.inventicons.com/uploads/iconset/1459/wm/512/Gramophone-turntable-vinyl-play-trackvintage-39.png'
  },
  isFavorite: {
    type: Sequelize.BOOLEAN
  },
  isArchived: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Track

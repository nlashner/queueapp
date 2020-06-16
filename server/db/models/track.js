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
      'https://cdn0.iconfinder.com/data/icons/music-86/512/music04-512.png'
  },
  isFavorite: {
    type: Sequelize.BOOLEAN
  },
  isArchived: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Track

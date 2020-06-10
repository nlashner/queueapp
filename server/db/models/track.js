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
    type: Sequelize.STRING
  },
  isFavorite: {
    type: Sequelize.BOOLEAN
  },
  isArchived: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Track

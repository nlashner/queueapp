const router = require('express').Router()
const {Track} = require('../db/models')
module.exports = router

router.get('/', async (req, rex, next) => {
  try {
    const tracks = await Track.findAll({
      where: {
        userId: userId
      }
    })
  } catch (error) {
    next(error)
  }
})

const router = require('express').Router()
const {Track} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const id = req.session.passport.user
    const tracks = await Track.findAll({
      where: {
        userId: id
      }
    })
    res.json(tracks)
  } catch (error) {
    next(error)
  }
})

module.exports = router

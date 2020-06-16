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

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const track = await Track.create(req.body)
    res.json(track)
  } catch (error) {
    next(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const {id, isFavorite} = req.body
    const track = await Track.findByPk(id)
    await track.update({isFavorite: !isFavorite})
    res.json(track)
  } catch (error) {
    next(error)
  }
})

router.delete('/:trackId', async (req, res, next) => {
  try {
    console.log('in delete')
    console.log(req.params.trackId)
    const track = await Track.findByPk(req.params.trackId)
    await track.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router

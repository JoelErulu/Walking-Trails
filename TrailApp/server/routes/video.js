import express from 'express'
import Videos from '../models/videoModel.js'

const router = express.Router()

// Routes for initial testing purposes
// TODO: Possibly add a new get request by categories?
// GET all videos
router.get('/', (req,res) => {
    res.json({mssg: 'GET ALL videos'})
})

//GET a single video
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single video'})
})

// POST a new video || ADMIN ONLY
router.post('/', async (req, res) => {
    const { title, url, category, totLikes, totDislikes } = req.body
    try {
        const user = await Videos.create({ title, url, category, totLikes, totDislikes })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ mssg: error.message })
    }
})

// DELETE a new video || ADMIN ONLY
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single video'})
})

// UPDATE a new video || ADMIN ONLY
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single video'})
})

export default router;
import express from 'express'
import Users from '../models/userModel.js'

const router = express.Router()

// Routes for initial testing purposes
// GET all users || ADMIN OLY
router.get('/', (req,res) => {
    res.json({mssg: 'GET ALL users'})
})

//GET a single user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'})
})

// POST a new user
router.post('/', async (req, res) => {
    const { name, email, password, roleType, id, gender, age, ethnicity, community } = req.body
    try {
        const user = await Users.create({ name, email, password, roleType, id, gender, age, ethnicity, community })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ mssg: error.message })
    }
})

// DELETE a new user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single user'})
})

// UPDATE a new user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single user'})
})

export default router;
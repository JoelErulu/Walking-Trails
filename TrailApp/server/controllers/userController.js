import Users from '../models/userModel.js'
import mongoose from 'mongoose'
// TODO: import bcrypt from 'bcrypt.js'
// TODO: import jwt from 'jsonwebtoken';

// GET all users
export const getAllUsers = async (req, res) => {
    const users = await Users.find({}).sort({createdAt: -1})
    res.status(200).json(users)
}

// GET a single user
export const getUser = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    } 

    const users = await Users.findById(id)
    
    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }
    res.status(200).json(users)
}

// CREATE a new user
export const createUser = async (req, res) => {
    const { name, email, password, roleType, id, gender, age, ethnicity, community } = req.body
    
    //Add document to MongoDB collection
    try {
        const users = await Users.create({ name, email, password, roleType, id, gender, age, ethnicity, community })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ mssg: error.message })
    }
}

// DELETE a user
export const deleteUser = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    }

    const users = await Users.findOneAndDelete({_id: id})

    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }

    res.status(200).json(users)
}

// UPDATE a user
export const updateUser = async (req, res) => {
    const { id } = req.params
    
    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user.'})
    } 

    const users = await Users.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!users) {
        return res.status(404).json({ error: 'No such user.' })
    }

    res.status(200).json(users)
}
import Videos from '../models/videoModel.js'
import mongoose from 'mongoose'

// GET all video
export const getAllVideos = async (req, res) => {
    const videos = await Videos.find({}).sort({createdAt: -1})
    res.status(200).json(videos)
}

// GET a single video
export const getVideo = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such video.'})
    } 

    const videos = await Videos.findById(id)
    
    if (!videos) {
        return res.status(404).json({ error: 'No such video.' })
    }
    res.status(200).json(videos)
}

// CREATE a new video
export const createVideo = async (req, res) => {
    const { title, url, category, subCategory, totLikes, totDislikes } = req.body
    
    //Add document to MongoDB collection
    try {
        const videos = await Videos.create({ title, url, category, subCategory, totLikes, totDislikes })
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).json({ mssg: error.message })
    }
}

// DELETE a video
export const deleteVideo = async (req, res) => {
    const { id } = req.params

    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such video.'})
    }

    const videos = await Videos.findOneAndDelete({_id: id})

    if (!videos) {
        return res.status(404).json({ error: 'No such video.' })
    }

    res.status(200).json(videos)
}

// UPDATE a video
export const updateVideo = async (req, res) => {
    const { id } = req.params
    
    //Check to see if id valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such video.'})
    } 

    const videos = await Videos.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!videos) {
        return res.status(404).json({ error: 'No such video.' })
    }

    res.status(200).json(videos)
}
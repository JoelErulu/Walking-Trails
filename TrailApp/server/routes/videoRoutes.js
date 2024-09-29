// Import dependencies
import express from 'express'

// Import controllers for API calls
import {
    createVideo,
    getAllVideos,
    getVideo,
    deleteVideo,
    updateVideo
} from '../controllers/videoController.js'

const router = express.Router()

// GET all videos
router.get('/', getAllVideos)

//GET a single video
router.get('/:id', getVideo)

// POST a new video || ADMIN ONLY
router.post('/', createVideo)

// DELETE a video
router.delete('/:id', deleteVideo)

// UPDATE a video
router.patch('/:id', updateVideo)

export default router;
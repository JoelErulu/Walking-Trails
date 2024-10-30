// Import dependencies
import express from 'express'

// Import controllers for API calls
import {
    createVideo,
    getAllVideos,
    getVideo,
    deleteVideo,
    updateVideo,
    likeVideo,
    dislikeVideo,
    incrementViewCount 

} from '../controllers/videoController.js'


const router = express.Router();

// GET all videos
router.get('/videos', getAllVideos);
// GET a single video
router.get('/:id', getVideo);
// POST a new video || ADMIN ONLY
router.post('/upload', createVideo);
// DELETE a video || ADMIN ONLY
router.delete('/:id', deleteVideo);
// UPDATE a video || ADMIN ONLY
router.patch('/:id', updateVideo);
// LIKE a video || ADMIN ONLY
router.patch('/like/:id', likeVideo);
// DISLIKE a video || ADMIN ONLY
router.patch('/dislike/:id', dislikeVideo);
// INCREMENT VIEW COUNT
router.patch('/view/:id', incrementViewCount); 

export default router;
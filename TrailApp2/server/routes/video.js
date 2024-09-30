import express from 'express';
//import { handleVideoUpload } from '../middleware/upload.js';
import { uploadVideo, getVideoById, likeVideo, dislikeVideo } from '../controllers/video.js';

const router = express.Router();

// Route for uploading a video
router.post('/upload-video', uploadVideo); //handleVideoUpload was second argument

// Route for retrieving a specific video by its ID
router.get('/:videoId', getVideoById);

// Route for liking a specific video
router.post('/:videoId/like', likeVideo);

// Route for disliking a specific video
router.post('/:videoId/dislike', dislikeVideo);

export default router;

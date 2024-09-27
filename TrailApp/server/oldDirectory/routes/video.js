{/*
// videoRoutes.js
import express from 'express';
//import multer from 'multer'; //  multer for file uploads
import { createVideo, getVideos, deleteVideo } from '../controllers/video.js';

const router = express.Router();

// Configure multer for video uploads
const upload = multer({ dest: 'uploads/' });

// Route for uploading a video
router.post('/', upload.single('video'), async (req, res) => {
  // Access uploaded video file information from req.file
  const { filename, originalname } = req.file;

  try {
    await uploadVideoToGridFS(filename);

    // Create a new video document with relevant metadata
    const newVideo = await Video.create({
      title: req.body.title,
      description: req.body.description,
      videoPath: filename,
      createdAt: new Date(),
    });

    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: 'Could not upload video.', error: error.message });
  }
});

// ... other routes for getVideos and deleteVideo

export default router;
*/}

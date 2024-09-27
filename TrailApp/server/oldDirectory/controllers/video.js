// videoController.js
import Video from '../models/video.js';
import fs from 'fs';

export const createVideo = async (req, res) => {
  const { title, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Please upload a video file." });
  }

  const video = req.file;

  const filename = video.originalname;

  const uploadStream = gfs.createWriteStream({ filename });
  const uploadPromise = new Promise((resolve, reject) => {
    video.stream().pipe(uploadStream)
      .on('error', reject)
      .on('finish', resolve);
  });

  try {
    await uploadPromise;
    const newVideo = await Video.create({ title, description, filename });
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: 'Could not create video.', error: error.message });
  }
};

export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find();

        res.status(200).json(videos);
    } catch (error) {
        res.status(404).json({ message: 'Videos not found.', error: error.message });
    }
};

export const deleteVideo = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedVideo = await Video.findByIdAndRemove(id);

        if (!deletedVideo) {
            return res.status(404).json({ message: `Video with id ${id} not found.` });
        }

        // Delete the video file from file system if needed
        fs.unlinkSync(deletedVideo.videoPath);

        res.status(200).json({ message: 'Video deleted successfully.', deletedVideo });
    } catch (error) {
        res.status(500).json({ message: 'Could not delete video.', error: error.message });
    }
};

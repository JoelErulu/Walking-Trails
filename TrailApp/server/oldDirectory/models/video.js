// videoSchema.js
import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    title: String,
    description: String,
    videoPath: String, // Path to the video file
    createdAt: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.model('Video', videoSchema);

// Import dependency
import mongoose from 'mongoose';

// Design schema
const trailSchema = mongoose.Schema({
    title: String,
    location: String,
    distance: Number,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

export default mongoose.model('TrailDetail', trailSchema);
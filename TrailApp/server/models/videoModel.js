import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    totLikes: { type: Number, default: 0 },
    totDislikes: { type: Number, default: 0 },
    views: { type: Number, default: 0 }, 
}, { timestamps: true });

const Videos = mongoose.model('Videos', videoSchema);

export default Videos;

// Import dependency
import mongoose from 'mongoose';

// Schema
const videoSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    url: { 
        type: String, 
        required: true,
        unique: true
    },
    category: { 
        type: String, 
        required: true 
    },
    subCategory: {
        type: String,
        required: true
    },
    totLikes: { 
        type: String 
    },
    totDislikes: { 
        type: String 
    },
}, { timestamps: true }); 

export default mongoose.model('video', videoSchema);
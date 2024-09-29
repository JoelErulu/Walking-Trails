// Import dependency
import mongoose from 'mongoose';

// Schema
// README: This schema is meant for USERS to GET, POST, UPDATE
// README: This schema is also meant for ADMINS to GET, POST, UPDATE, DELETE
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
    totLikes: { 
        type: String 
    },
    totDislikes: { 
        type: String 
    },
}, { timestamps: true }); 

export default mongoose.model('video', videoSchema);
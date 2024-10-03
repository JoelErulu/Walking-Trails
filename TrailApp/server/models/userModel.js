// Import dependency
import mongoose from 'mongoose';

// Schema
// README: This schema is meant for USERS to GET, POST, UPDATE
// README: This schema is also meant for ADMINS to UPDATE roleType
const userSchema = mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    roleType: { 
        type: String 
    },
    gender: { 
        type: String 
    },
    age: { 
        type: Number 
    },
    ethnicity: { 
        type: String 
    },
    community: { 
        type: String 
    },
}, { timestamps: true }); 

export default mongoose.model('user', userSchema);
// Import dependency
import mongoose from 'mongoose';

// Design schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {type:String },
    id: { type: String },
});

export default mongoose.model('User', userSchema);
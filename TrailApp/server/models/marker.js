// Import dependency
import mongoose from 'mongoose';

// Design schema
const MarkerSchema = mongoose.Schema({
    sTrail: String,
    lat: Number,
    lng: Number,
    name: String,
    exercise: String,
    img: [String],
});

const Marker = mongoose.model('Marker', MarkerSchema);

export default Marker;
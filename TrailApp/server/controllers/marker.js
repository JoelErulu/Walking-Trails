// Import dependency
import mongoose from 'mongoose';

// Import model
import Marker from '../models/marker.js';

export const getMarkers = async (req, res) => {
    try {
        const postMarker = await Marker.find().sort({ _id: -1 });
        res.status(200).json(postMarker);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createMarker = async (req, res) => {
    const marker = req.body;

    const newMarker = new Marker(marker);

    try {
        await newMarker.save();

        res.status(201).json(newMarker);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

export const updateMarker = async (req, res) => {
    const { id: _id } = req.params;
    const marker = req.body;


    const updatedMarker = await Marker.findByIdAndUpdate(_id, { ...marker, _id }, { new: true });
   
    res.json(updatedMarker);
}

export const deleteMarker = async (req, res) => {
    const { id } = req.params;

    await Marker.findByIdAndRemove(id);
   
    res.json({ message: 'Marker deleted successfully' });
}
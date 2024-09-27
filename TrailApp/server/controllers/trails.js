// Import dependency
import mongoose from 'mongoose';

// Import model
import TrailDetail from '../models/trailDetail.js';

export const getTrails = async (req, res) => {
    try {
        const trailDetail = await TrailDetail.find().sort({ _id: -1 });

        res.status(200).json(trailDetail);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createTrail = async (req, res) => {
    const trail = req.body;

    const newTrail = new TrailDetail(trail);

    try {
        await newTrail.save();

        res.status(201).json(newTrail);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

export const updateTrail = async (req, res) => {
    const { id: _id } = req.params;
    const trail = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No trail with that id');

    const updatedTrail = await TrailDetail.findByIdAndUpdate(_id, { ...trail, _id }, { new: true });
   
    res.json(updatedTrail);
}

export const deleteTrail = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No trail with that id');

    await TrailDetail.findByIdAndRemove(id);
   
    res.json({ message: 'Trail deleted successfully' });
}
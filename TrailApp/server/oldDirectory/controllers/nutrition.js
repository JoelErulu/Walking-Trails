import mongoose from 'mongoose';
import Nutrition from '../models/nutrition.js';

export const getNutrition = async (req, res) => {
    try {
        const postNutrition = await Nutrition.find().sort({ _id: -1 });
        console.log(postNutrition);
        res.status(200).json(postNutrition);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createNutrition = async (req, res) => {
    const nutrition = req.body;

    const newNutrition = new Nutrition(nutrition);

    try {
        await newNutrition.save();

        res.status(201).json(newNutrition);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

export const updateNutrition = async (req, res) => {
    const { id: _id } = req.params;
    const nutrition = req.body;


    const updatedNutrition = await Nutrition.findByIdAndUpdate(_id, { ...nutrition, _id }, { new: true });
   
    res.json(updatedNutrition);
}

export const deleteNutrition = async (req, res) => {
    const { id } = req.params;

    await Nutrition.findByIdAndRemove(id);
   
    res.json({ message: 'Nutrition deleted successfully' });
}
import mongoose from 'mongoose';

const nutritionSchema = mongoose.Schema({
    name: String,
    description: String,
    link: String,
});

const Nutrition = mongoose.model('nutrition', nutritionSchema);

export default Nutrition;
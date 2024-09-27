import express from 'express';
import { createNutrition, getNutrition, updateNutrition, deleteNutrition} from '../controllers/nutrition.js';


const router = express.Router();

router.get('/', getNutrition);
router.post('/', createNutrition);
router.patch('/:id', updateNutrition);
router.delete('/:id', deleteNutrition);

export default router;
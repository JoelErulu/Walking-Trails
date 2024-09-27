// Import dependency
import express from 'express';

// Import controller
import { getTrails, createTrail, updateTrail, deleteTrail } from '../controllers/trails.js';

const router = express.Router();

router.get('/', getTrails);
router.post('/', createTrail);
router.patch('/:id', updateTrail);
router.delete('/:id', deleteTrail);

export default router;
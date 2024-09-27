// Import dependency
import express from 'express';

// Import controller
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../controllers/marker.js';


const router = express.Router();

router.get('/', getMarkers);
router.post('/', createMarker);
router.patch('/:id', updateMarker);
router.delete('/:id', deleteMarker);

export default router;
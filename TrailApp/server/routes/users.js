// Import dependency
import express from 'express';

// Import controller
import { signin, signup, googleSignIn, getUsers, updateUserRole, logout } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/users', getUsers);
router.patch('/:id', updateUserRole);
router.post('/googleLogin', googleSignIn);
router.post('/logout', logout);

export default router;
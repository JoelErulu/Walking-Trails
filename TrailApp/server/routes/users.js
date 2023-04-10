import express from 'express';

import { signin, signup, googleSignIn } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/googleLogin', googleSignIn);

export default router;
import express from 'express';

import { getPosts, getPostPreview, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', getPostPreview);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
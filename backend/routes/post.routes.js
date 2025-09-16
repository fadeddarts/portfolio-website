import express from 'express';
import mongoose from 'mongoose';

import post from '../blogposts/post.blogposts.js';
import { createPost, getPosts } from '../controllers/post.controller.js';

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);

export default router;
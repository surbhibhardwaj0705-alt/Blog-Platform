import express from 'express';
const router = express.Router();

import Post from '../models/Post.js';

// Create a new blog post
router.post('/posts', async (req,res) =>{
const post = new Post(req.body);
await post.save();
res.json(post);
});

// Get all blog posts
router.get('/posts', async (req,res) =>{
    const posts = await Post.find();
    res.json(posts);
});


// Get a single blog post by ID
router.get('/posts/:id', async (req,res) =>{
    const post = await Post.findById(req.params.id);
    res.json(post);
});

// Update a blog post by ID
router.put('/posts/:id', async (req, res) =>{
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(post);
});

// Delete a blog post by ID
router.delete('/posts/:id',async (req,res) =>{
    try{
        await Post.findOneAndDelete(req.params.id);
        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error){
        res.status(500).json({
            error: error.message
        });
    }
});

export default router;
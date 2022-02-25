import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {

        const posts = await PostMessage.find()
        res.status(200).json(posts);

    } catch (err){
        res.status(404).json({message: err.message});
    }
}

export const createPosts = async (req,res) => {
    
    const body = req.body();
    const newPosts = await PostMessage(post);

    try {
        await newPosts.save();
        res.status(201).json(newPosts);
    } catch(err){
        res.status(409).json({message: err.message});
    }
}
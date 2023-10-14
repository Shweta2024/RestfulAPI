const express = require("express")
const router = express.Router()
const Post = require("../models/Post")


//  Gets ALL the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    }
    catch (err) {
        console.log(err.message)
    }
})

//  Creates a new post
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        await post.save()
        res.send(post)
    }
    catch (err) {
        console.log(err.message)
    }
})

// Gets a SPECIFIC post
router.get('/:postName', async (req, res) => {
    try {
        const selectedPost = req.params.postName
        console.log("selected post title: " + selectedPost)
        const result = await Post.find({ "title": selectedPost })
        res.send(result)
    }
    catch (err) {
        console.log(err.message)
    }
})

//  Deletes a SPECIFIC post
router.delete('/:postName', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ title: req.params.postName })
        res.send(deletedPost)
    }
    catch (err) {
        console.log(err.message)
    }
}) 

// update title
router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postID },
            { $set: { title: req.body.title } })
        res.send(updatedPost)
    }
    catch (err) {
        console.log(err.message)
    }
})

module.exports = router
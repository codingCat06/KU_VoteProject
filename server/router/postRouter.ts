const express = require('express')
const router = express.Router()
const PostController = require('../controller/posts.controller')
const UserController = require('../controller/users.controller')
router.post('/createPost', UserController.verifyToken, PostController.createPost)
router.post('/getPosts', UserController.verifyToken, PostController.getPosts)
router.get('/getPostContent', PostController.getPostContent)
module.exports = router

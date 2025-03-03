import { NextFunction, Request, Response } from "express";

const Post = require('../model/post')
exports.createPost = async (req:Request, res:Response, next:NextFunction) => {
    console.log('try to create post')
    const {title, startTime, endTime, totalVoter, requireVoter,content,options, participation} = req.body
    const post = new Post({title, startTime, endTime, totalVoter, requireVoter,content,options, participation})
    post.save()
        .then((result: any)=>res.send(result))
        .catch((err:Error) =>{
            console.log(err)
    })
}

exports.getPosts = async (req:Request, res:Response, next:NextFunction) => {
    const posts = await Post.find().select('-content -options')
    res.send(posts)
}

exports.getPostContent = async(req: Request, res:Response, next:NextFunction) => {
    console.log(req.query.id)
    const post = await Post.find({_id:req.query.id}).select(' -_id')
    res.send(post)
}
import { NextFunction, Request, Response } from "express";

const User = require('../model/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY; 
exports.login = async function (req:Request, res:Response, next:NextFunction) {
    try {
        const user = await User.find(req.body);
        if (user.length) {   
            const token = jwt.sign({user_id: user[0]._id}, YOUR_SECRET_KEY, {expiresIn: '3h'});
            res.cookie('AccessToken', token, {httpOnly:true});  
            res.cookie('name', user[0].name);  
            res.cookie('role', user[0].role);  
            res.cookie('id', user[0]._id);  
            res.status(200).json({name:user[0].name, role:user[0].role, id:user[0]._id})
        } 
        else {
            res.status(406).json({ error: 'invalid user' });
        }
    }
    catch (err) {
        console.error(err);
        res.status(406).json({error: 'Error'})
}};


exports.verifyToken = function verifyToken(req:Request, res:Response, next:NextFunction) {
    try { 
        /*
            const cookie_parser = require('cookie-parser')
            app.use(cookie_parser())
            를 써줘야지 req.cookies 가 존재함.

            req.headers.cookie 는 그냥 문자열 통째로 줘서 parsing 이 쉽지 않음.
        */
        // const clientToken = req.cookies.user;
        console.log('verify token')
        const AccessToken = req.cookies.AccessToken
        let decoded = jwt.verify(AccessToken, YOUR_SECRET_KEY);
        console.log('lets decode', decoded)
        if (decoded) {      
            res.locals.userId = decoded.user_id; 
            next()
        } 

    } 
    catch (err) {  
        console.log('access is expired, so try to create accessToken with refreshToken')
        res.clearCookie('name')
        res.clearCookie('role')
        res.clearCookie('id')
        res.status(401).json('can not find user information')
    }};

exports.logout = (req:Request, res:Response, next:NextFunction) => {
    console.log('try to logout')
    res.clearCookie('AccessToken')
    res.clearCookie('name')
    res.clearCookie('role')
    res.clearCookie('id')
    res.status(200).json({status:'ok'})
    
}
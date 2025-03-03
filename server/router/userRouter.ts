import { Request, Response, NextFunction } from 'express';

const express = require('express')
const router = express.Router()
const User = require('../model/user')
const UserController = require('../controller/users.controller')
router.post('/', (req:Request, res:Response, next: NextFunction)=>{
    const {name, phone_number, student_number, password, role} = req.body
    console.log(name, phone_number, student_number, password, role)
    const user = new User({name, phone_number, student_number, password, role})
    user.save()
        .then((result: any)=>res.send(result))
        .catch((err:Error) =>{
            console.log(err)
        })
})

router.post('/login', UserController.login,  (req:Request, res:Response)=>res.status(200).send('successfully login!'))
router.get('/verifyToken', UserController.verifyToken, (req:Request,res:Response) => {
    console.log('wow')
    res.status(200).send("ok")
})
router.get('/logout', UserController.logout)
module.exports = router
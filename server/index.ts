import express, { Request, Response, NextFunction } from 'express';

// require('express') 는 express 모듈 자체를 가져오는 거고
// express 인스턴스가 필요함.. 
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const cookie_parser = require('cookie-parser')
const port=5000; 
const uri = "mongodb+srv://codingcat06:0DXoaATwjJqjXDWq@kuproject.1vb7j.mongodb.net/KUProject?retryWrites=true&w=majority&appName=KUProject"

app.use(cookie_parser())
app.use(express.urlencoded({extended:true})); // url encode 설정
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true
})) // cors 설정
app.use(express.json()) // middle ware 설정

app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('main')
})

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB => UserAPI");
  })
  .catch((err:Error) => {
    console.log(err);
  }
);

app.use('/user', require('./router/userRouter'))
app.use('/post', require('./router/postRouter'))
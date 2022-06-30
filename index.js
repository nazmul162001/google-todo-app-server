import express from 'express';
import route from './Route/Routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

// user: googleTodo
//paass: jFvkYNKYkIK4IaOz

//mongoose connect
mongoose.connect(process.env.MONGODB_URI,()=> {
  console.log('mongodb connected');
})

// middleware
app.use(bodyParser.json());
app.use('/api/user', route);

app.get('/', (req,res)=> {
  res.send('My Todos app running')
})

app.listen(port, ()=> {
  console.log('server connected');
})
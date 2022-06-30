import express from 'express';
import User from '../models/userSchema.js';
const routes = express.Router();

// inserted todo-task to the server
  
 routes.post('/', async (req, res)=> {
  try{
    const newUser = await User(req.body);
    await newUser.save();
    res.send(newUser);
  }
  catch(error){
    res.send({error: error.message});
  }
 })



export default routes;
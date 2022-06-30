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

 // api for getting data from server
 routes.get('/', async(req, res)=> {
  try{
    const todoTask = await User.find();
    res.send(todoTask);
  }
  catch(error){
    res.send({error: error.message})
  }
 })

 // api for delete todo
 routes.delete('/:id', async(req, res)=> {
  try{
    const deleteTodo = await User.findByIdAndDelete(req.params.id);
    res.send(deleteUser);
  }
  catch(error){
    res.send({error: error.message})
  }
 })



export default routes;
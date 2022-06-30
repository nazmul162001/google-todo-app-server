import mongoose from 'mongoose';

// create schema
const userSchema = mongoose.Schema({
  todoTask: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);
export default User;
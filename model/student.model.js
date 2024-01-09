//Require Mongoose
import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  studentName: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Username is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  // address: {
  //       type: String,
  //       required: [true,"Address is required"],
  //       trim: true
  //     },
  role: String,
  status: Number,
  info: String
    });
  // compile schema to model
const UserSchemaModel = mongoose.model('student_collection',UserSchema);

export default UserSchemaModel
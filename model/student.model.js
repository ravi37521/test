//Require Mongoose
import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const StudentSchema = mongoose.Schema({
//const StudentSchema = mongoose.Schema({
  
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
  
    });
  // compile schema to model
const StudentSchemaModel = mongoose.model('student_collection',StudentSchema);

export default StudentSchemaModel
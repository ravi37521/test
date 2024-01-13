//Require Mongoose
import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const ClassSchema = mongoose.Schema({
 // _id: Number,
  className: {
    type: String,
    required: [true,"className is required"],
    lowercase: true,
    trim: true,
  },
 
  
    });
  // compile schema to model
const ClassSchemaModel = mongoose.model('class_collection',ClassSchema);

export default ClassSchemaModel
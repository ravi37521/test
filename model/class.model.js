//Require Mongoose
import mongoose from 'mongoose';
//import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  className: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
 
   role: String,
   status: Number,
   info: String
    });
  // compile schema to model
const ClassSchemaModel = mongoose.model('class_collection',UserSchema);

export default UserSchemaModel
import '../model/connection.js'
//import jwt from 'jsonwebtoken';
import url from 'url';

//to link schema model
import StudentSchemaModel from '../model/student.model.js';

export var save=async(req,res,next)=>{
var studentDetails=req.body;

var studentResult = await StudentSchemaModel.create(studentDetails);
if(studentResult)
 return res.status(201).json({"msg":"success"});
else
 return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
 var condition_obj=url.parse(req.url,true).query;
 var studentList = await StudentSchemaModel.find(condition_obj);
 if(studentList.length!=0)
  return res.status(201).json(studentList);
 else
   return res.status(500).json(studentList);
}

export var deleteUser=async(req,res,next)=>{
 var id = req.params.id;
 var student = await StudentSchemaModel.find({_id: id});
 if(student.length!=0){
   let studentResult = await StudentSchemaModel.deleteMany({_id:id}); 
   if(studentResult)
    return res.status(201).json({"msg":"success"});
   else
    return res.status(500).json({error: "Server Error"});
 }
 else
   return res.status(404).json({error: "Resource not found"});             
}

export var updateUser=async(req,res,next)=>{
 let studentDetails = await StudentSchemaModel.findOne(JSON.parse
   (req.body.condition_obj));   
 //console.log(userDetails);
 if(studentDetails){
    let studentResult=await StudentSchemaModel.updateOne(JSON.parse
     (req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
    if(studentResult)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
 }
 else
  return res.status(404).json({error: "Requested resource not available"});
}
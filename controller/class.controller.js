import '../model/connection.js'
//import jwt from 'jsonwebtoken';
import url from 'url';

//to link schema model
import ClassSchemaModel from '../model/class.model.js';

export var save=async(req,res,next)=>{
var classDetails=req.body;

var classResult = await ClassSchemaModel.create(classDetails);
if(classResult)
  return res.status(201).json({"msg":"success",classResult});
else
 return res.status(500).json({"error":"Server Error"});
}

export var fetch=async (req,res,next)=>{
 var condition_obj=url.parse(req.url,true).query;
 var classList = await ClassSchemaModel.find(condition_obj);
 if(classList.length!=0)
 
   return res.status(201).json(classList);
 else
   return res.status(500).json(classList);
}

export var deleteUser=async(req,res,next)=>{
 var id = req.params.id;
 var classResult = await ClassSchemaModel.find({_id: id});
 if(classResult.length!=0){
   let classResult = await ClassSchemaModel.deleteMany({_id: id});   
   if(classResult)
    return res.status(201).json({"msg":"success"});
   else
    return res.status(500).json({error: "Server Error"});
 }
 else
   return res.status(404).json({error: "Resource not found"});             
}

export var updateUser=async(req,res,next)=>{
 let classDetails = await ClassSchemaModel.findOne(JSON.parse
   (req.body.condition_obj));   
 //console.log(userDetails);
 if(classDetails){
    let classResult=await ClassSchemaModel.updateOne(JSON.parse
     (req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
    if(classResult)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
 }
 else
  return res.status(404).json({error: "Requested resource not available"});
}
import '../model/connection.js'
//import jwt from 'jsonwebtoken';
import url from 'url';

//to link schema model
import TeacherSchemaModel from '../model/teacher.model.js'

export var save=async(req,res,next)=>{ 
var teacherDetails=req.body;
// teacher name same
var Teacher= await TeacherSchemaModel.findOne({email:teacherDetails.email.toLowerCase()});
 if(Teacher)
 return res.status(200).json({"error":"teacher  name already"});

var teacher = await TeacherSchemaModel.create(teacherDetails);
if(teacher)
 return res.status(201).json({"msg":"success",teacher});   
else
 return res.status(500).json({"error":"Server Error"});

}

export var fetch=async (req,res,next)=>{
 var condition_obj=url.parse(req.url,true).query;
 var teacherList = await TeacherSchemaModel.find(condition_obj);
 if(teacherList.length!=0)
 
   return res.status(201).json(teacherList);
 else
   return res.status(500).json(teacherList);
}

export var deleteUser=async(req,res,next)=>{
 var id = req.params.id;
 var teacher = await TeacherSchemaModel.find({_id: id});
 if(teacher.length!=0){
   let result = await TeacherSchemaModel.deleteMany({_id:id}); 
   if(result)
    return res.status(201).json({"msg":"success"});
   else
    return res.status(500).json({error: "Server Error"});
 }
 else
   return res.status(404).json({error: "Resource not found"});             
}

export var updateUser=async(req,res,next)=>{
 let teacherDetails = await TeacherSchemaModel.findOne(JSON.parse
   (req.body.condition_obj));   
 //console.log(userDetails);
 if(teacherDetails){
    let teacher=await TeacherSchemaModel.updateOne(JSON.parse
     (req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
    if(teacher)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
 }
 else
  return res.status(404).json({error: "Requested resource not available"});
}
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express();

//to link routes
import teacherRouter from './routes/teacher.router.js';
import studentRouter from './routes/student.router.js';
import classRouter from './routes/class.router.js';
//configuration to extract request body content
app.use(bodyParser());

//middleware configuration to load api routes
//app.use("/user",userRouter);
//app.use("/category",categoryRouter);
 app.use("/user" ,classRouter);
 app.use("/user",teacherRouter);
 app.use("/user",studentRouter);
 
app.listen(3001);
console.log("Server invoked at link http://localhost:3001");
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

var app = express();

//to link routes
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';

//configuration to extract request body content
app.use(bodyParser());

//middleware configuration to load api routes
app.use("/user",userRouter);
app.use("/category",categoryRouter);

app.listen(3001);
console.log("Server invoked at link http://localhost:3001");
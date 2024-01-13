import express from 'express';
import * as classController from '../controller/class.controller.js';

var router = express.Router();

router.post("/save",classController.save);

router.get("/fetch",classController.fetch);

router.delete("/delete/:id",classController.deleteUser); 

router.patch("/update",classController.updateUser);

   
export default router;




/*router.post("/login",userController.login); */
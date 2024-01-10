import express from 'express';
import * as teacherController from '../controller/teacher.controller.js';

var router = express.Router();

router.post("/save",teacherController.save);

router.get("/fetch",teacherController.fetch);

router.delete("/delete/:id",teacherController.deleteUser);

router.patch("/update",teacherController.updateUser);

export default router;
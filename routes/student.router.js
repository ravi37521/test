import express from 'express';
import * as studentController from '../controller/student.controller.js';

var router = express.Router();

router.post("/save",studentController.save);

router.get("/fetch",studentController.fetch);

router.delete("/delete/:id",studentController.deleteUser);

router.patch("/update",studentController.updateUser);

export default router;
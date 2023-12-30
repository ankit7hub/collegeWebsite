import express from "express";
const router = express.Router();
import CourseController from "../controllers/CourseController.js";
router.post('/register', CourseController.CourseRegister);
router.get('/display', CourseController.CourseDisplay);
router.get('/search/:id', CourseController.CourseSearch);
router.delete('/delete/:id', CourseController.CourseDelete);
router.put('/update/:id', CourseController.CourseUpdate);
export default router;
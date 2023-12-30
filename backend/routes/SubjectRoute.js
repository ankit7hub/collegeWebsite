import express from "express";
const router = express.Router();
import SubjectController from "../controllers/SubjectController.js";
router.post('/register', SubjectController.SubjectRegister);
router.get('/display', SubjectController.SubjectDisplay);
router.get('/search/:id', SubjectController.SubjectSearch);
router.delete('/delete/:id', SubjectController.SubjectDelete);
router.put('/update/:id', SubjectController.SubjectUpdate);

export default router;
import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController.js";
router.post('/register', UserController.UserRegister);
router.get('/display', UserController.UserDisplay);
router.get('/search/:id', UserController.UserSearch);
router.delete('/delete/:id', UserController.UserDelete);
router.put('/update/:id', UserController.UserUpdate);
router.post('/login', UserController.UserLogin);
router.post('/logout', UserController.UserLogout);


export default router;
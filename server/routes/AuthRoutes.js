import {Router} from 'express'
import { login, signup,getUserInfo,updateProfile,addProfileImage,removeProfileImage, logout } from '../controllers/AuthControllers.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';

import multer from 'multer';

const upload = multer({dest:"uploads/profile/"})



const authRoutes = Router();

authRoutes.post("/signup",signup)
authRoutes.post("/login",login)
authRoutes.get("/user-info",verifyToken,getUserInfo)
authRoutes.post("/update-profile",verifyToken,updateProfile)
authRoutes.post("/add-profile-image",verifyToken,upload.single("profile-image"),addProfileImage)
authRoutes.delete('/remove-profile-image',verifyToken,removeProfileImage)
authRoutes.post('/logout',logout)

export default authRoutes
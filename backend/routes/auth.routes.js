import express from 'express';
import { login, signup, logout } from '../controllers/auth.controller.js';

const router = express.Router();
router.post("/signup", signup); // Changed to POST for signup
router.post("/login", login);   // Changed to POST for login
router.post("/logout", logout); // Changed to POST for logout

export default router;

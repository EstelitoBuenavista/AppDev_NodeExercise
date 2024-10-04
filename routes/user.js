import express from 'express';
import { register, profile, login } from '../controllers/userController';
import authenticateToken from '../middleware/authenticateToken';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/profile', authenticateToken, profile);

export { userRouter };
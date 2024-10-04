import express from 'express';
import { register, profile, login } from '../controllers/userController.js';
import authenticateToken from '../middleware/authenticateToken.js';

const userRouter = express.Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/', profile);

export default userRouter;
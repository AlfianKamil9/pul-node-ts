import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAllUsers);
userRoutes.post('/', UserController.postUser);

export default userRoutes;

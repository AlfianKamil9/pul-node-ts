import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAllUsers);

export default userRoutes;

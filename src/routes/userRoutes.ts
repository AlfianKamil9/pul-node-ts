import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAllUsers);
userRoutes.post('/', UserController.postUser);
userRoutes.delete('/', UserController.deleteUser);

export default userRoutes;

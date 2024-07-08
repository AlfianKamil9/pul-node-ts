import { Router } from 'express';
import { Request, Response } from 'express';
import UserController from '../presentation/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAllUsers);

export default userRoutes;

import { Router } from 'express';
import { loginSchema } from '../middleware/validation/authValidation';
import { Validate } from '../middleware/validation';
import AuthController from '../controllers/authController';

const routes = Router();

routes.post('/login', Validate(loginSchema), AuthController.login )

export default routes;
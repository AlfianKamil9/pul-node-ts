import { Router } from 'express';
import UserController from '../controllers/UserController';
import { Validate } from '../middleware/validation';
import { createUserSchema, updateUserSchema } from '../middleware/validation/userValidation';

const routes = Router();

routes.get('/', UserController.getAllUsers);
routes.get('/:id', UserController.getUser);
routes.post('/', Validate(createUserSchema) , UserController.postUser);
routes.put('/:id', Validate(updateUserSchema), UserController.updateUser);
routes.delete('/:id', UserController.deleteUser);

export default routes;

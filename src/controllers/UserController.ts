import { Request, Response } from 'express';
import ApiResponse from '../helpers/ApiResponse';
import ServicesUsers from '../domain/ServiceUsers';


interface User extends Request {
    name: string,
    email: string,
    password: string,
    is_active: boolean,
    role_id: number
}

class UserController {
  public static async getAllUsers(req: Request, res: Response) {
    try {
      const allUsers = await ServicesUsers.allusers();
      res.status(200).json(ApiResponse.response200(allUsers, 'Get All Users'));
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }

  public static async postUser(req: Request, res: Response) {
    try {
      const bodyUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        is_active: req.body.is_active,
        role_id: req.body.role_id,
      }
      const createUsers = await ServicesUsers.createUsers(bodyUser);
      console.log(createUsers);
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }
}

export default UserController;

import { Request, Response } from 'express';
import ApiResponse from '../helpers/ApiResponse';
import ServicesUsers from '../domain/ServiceUsers';

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
}

export default UserController;

import { Request, Response } from 'express';
import BussinessUsers from '../bussiness/BussinessUsers';
import ApiResponse from '../helpers/ApiResponse';

class UserController {
  public static async getAllUsers(req: Request, res: Response) {
    try {
      const allUsers = await BussinessUsers.allusers();
      console.log('USER => ', allUsers);
      console.log(ApiResponse.response200(allUsers, 'Get All Users'));
      res.status(200).json(ApiResponse.response200(allUsers, 'Get All Users'));
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }
}

export default UserController;

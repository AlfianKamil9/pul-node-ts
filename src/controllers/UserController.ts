import { Request, Response } from 'express';
import ApiResponse from '../helpers/ApiResponse';
import ServicesUsers from '../domain/ServiceUsers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserController {
  public static async getAllUsers(req: Request, res: Response) {
    try {
      // Panggil Service Yang Menangani Ambil Semua Data
      const allUsers = await ServicesUsers.allusers();
      // Mengembalikan response dengan handler Helper Api Response
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

      if (createUsers != 201) {
        return res.status(500).json(ApiResponse.response500('Internal Server Error'))
      }
      return res.status(201).json(ApiResponse.response201('Berhasil Create User'))
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }

  public static async deleteUser(req: Request, res: Response) {
    try {
      // const user = await prisma.user.findUnique({
      //   where: {
      //     id_user: req.params.id_user
      //   }
      // })
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }
}

export default UserController;

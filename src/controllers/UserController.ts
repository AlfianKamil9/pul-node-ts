import { Request, response, Response } from 'express';
import ApiResponse from '../helpers/ApiResponse';
import ServicesUsers from '../domain/ServiceUsers';
import bcrypt from 'bcryptjs'

class UserController {
  /**
   * MENDAPATKAN USER 
   */ 
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

   /**
   * MENDAPATKAN DETAIL USER 
   */ 
  public static async getUser(req: Request, res: Response) {
    try {
      const user = await ServicesUsers.detailUser(parseInt(req.params.id))
      if (user == null) {
        return res.status(404).json(ApiResponse.response404(user, 'Not Found Data'))  
      }
      return res.status(200).json(ApiResponse.response200(user, 'Success Get Detail User'))
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }

   /**
   * MEMBUAT USER 
   */ 
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

   /**
   * MENGUPDATE USER 
   */ 
  public static async updateUser(req: Request, res: Response) {
    try {
      let bodyUser = {}
      const cek = await ServicesUsers.detailUser(parseInt(req.params.id))
      if (cek == null) {
        return res.status(404).json(ApiResponse.response404(cek, 'Not Found Users'))
      }
      if (req.body.password == null) {
        bodyUser = {
          name: req.body.name,
          email: req.body.email,
          is_active: req.body.is_active,
          role_id: req.body.role_id,
        }
      } else {
        const hash_password = bcrypt.hashSync(req.body.password, 10);
        bodyUser = {
          name: req.body.name,
          email: req.body.email,
          password: hash_password,
          is_active: req.body.is_active,
          role_id: req.body.role_id,
        }
      }
      const updateUser = await ServicesUsers.updateUser(bodyUser, parseInt(req.params.id));
      if (updateUser != 200) {
        return response.status(500).json(ApiResponse.response500('Internal Server Error'));  
      }
      return res.status(200).json(ApiResponse.response200(bodyUser, 'User Successfully Updated'))
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }

   /**
   * MENGHAPUS USER 
   */ 
  public static async deleteUser(req: Request, res: Response) {
    try {
      const cek = await ServicesUsers.detailUser(parseInt(req.params.id))
      if (cek == null) {
        return res.status(404).json(ApiResponse.response404(cek, 'Not Found Users'))
      }
      const deleteUser = await ServicesUsers.deleteUser(parseInt(req.params.id));
      if (deleteUser != 200) {
        return res.status(500).json(ApiResponse.response500('Internal Server Error'));
      }
      return res.status(200).json(ApiResponse.response200(null, 'Delete Success'));
    } catch (error) {
      console.log(ApiResponse.response500((error as Error).message));
      return res.status(500).json(ApiResponse.response500((error as Error).message));
    }
  }
}

export default UserController;

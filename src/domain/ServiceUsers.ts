import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import { CreateUser, UpdateUser } from '../utils';

const prisma = new PrismaClient();

class ServicesUsers {
  static async allusers() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async createUsers(body: CreateUser) {  
      const bodyCreate = await prisma.user.create({
        data: body
      })
      console.log('Data Created : ',  bodyCreate)
      if (!bodyCreate) {
        return 500
      }
      return 201;
  }

  static async updateUser(body: Object, id: number) {
    const updateUser = await prisma.user.update({
      where: {
        id_user: id
      },
      data: body
    });
    console.log('Data updated : ',  updateUser)
    if (!updateUser) {
      return 500
    }
    return 200
  }

  static async detailUser(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id_user: id
      }
    })
    if (!user) {
      return null
    } 
    return user
  }

  static async deleteUser(id: number) {
    const userDelete = await prisma.user.delete({
      where: {
        id_user: id
      }
    });
    console.log('Data Deleted : ', userDelete)
    if (!userDelete) {
      return 500 
    }
    return 200
  }

}


export default ServicesUsers;

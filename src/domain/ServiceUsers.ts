import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import { log } from 'console';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface User extends Request {
    name: string,
    email: string,
    password: string,
    is_active: boolean,
    role_id: number
}

class ServicesUsers {
  static async allusers() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async createUsers(body: User) {
    console.log(body)  
    const hash_password = await bcrypt.hashSync(body.password , 10);
      const bodyCreate = await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          password: hash_password,
          is_active: body.is_active,
          role_id: body.role_id
        }
      })
    
      console.log('ss : ',  bodyCreate)
      if (!bodyCreate) {
        return 500
      }
      return 200;
  }
}

export default ServicesUsers;

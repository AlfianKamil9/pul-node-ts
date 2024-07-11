import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import { CreateUser } from '../utils';

const prisma = new PrismaClient();



class ServicesUsers {
  static async allusers() {
    const users = await prisma.user.findMany();
    return users;
  }

  static async createUsers(body: CreateUser) {
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
      return 201;
  }
}

export default ServicesUsers;

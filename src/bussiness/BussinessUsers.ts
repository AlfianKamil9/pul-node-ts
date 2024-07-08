import { PrismaClient } from '@prisma/client';
import ModelUsersProses from '../model/process/ModelUsersProses';
import User from '../model/User';

class BussinessUsers {
  static async allusers() {
    const userBussiness = new PrismaClient();
    const users = await userBussiness.user.findMany();
    return users;
  }
}

export default BussinessUsers;

import { PrismaClient } from '@prisma/client';
import redisClient from '../redis/index';
import User from '../model/User';

class ServicesUsers {
  static async allusers() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({});

    return users;
  }
}

export default ServicesUsers;

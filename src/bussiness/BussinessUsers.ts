import { PrismaClient } from '@prisma/client';
import redisClient from '../redis/index';

class BussinessUsers {
  static async allusers() {
    const userBussiness = new PrismaClient();
    const { getAsync, setAsync } = redisClient;

    const cache_key = 'users:all';
    const cache_data = await getAsync(cache_key);

    if (cache_data) {
      return JSON.parse(cache_data);
    }
    
    const users = await userBussiness.user.findMany();

    await setAsync(cache_key, JSON.stringify(users), 'EX', 3600);
    
    return users;
  }
}

export default BussinessUsers;

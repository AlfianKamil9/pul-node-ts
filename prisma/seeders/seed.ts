import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';
import { log } from 'console';


  const prisma = new PrismaClient();

  const data = Array.from({ length: 5 }).map(() => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(faker.internet.password(), 10),
    role_id: 23, 
    is_active: true,
  }));

  async function main() {
    const datas = await prisma.user.createMany({
      data: data,
      skipDuplicates: true
    })

    console.log(data)
    console.log(datas)
  }

  main().
   catch(
    (error: Error) => {
      console.error('Error seeding database:', error);
    }
   ).finally(() => {
    prisma.$disconnect();
  })

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const data = Array.from({ length: 10 }).map(() => ({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: bcrypt.hashSync(faker.internet.password(), 10),
      role_id: 3, 
      is_active: true,
    }));


    // const userRole = await prisma.roles.createMany({
    //   data: [
    //     {role_name : "Super User"},
    //     {role_name : "Manager"},
    //     {role_name : "Customer"}
    //   ]
    // });
    //console.log(userRole);
    console.log(data)
    const datas = await prisma.user.createMany({
      data,
      skipDuplicates: true
    })

    console.log(datas)
  }

  main().
   catch(
    (error: Error) => {
      console.error('Error seeding database:', error);
    }
   ).finally(async () => {
      await prisma.$disconnect();
  })

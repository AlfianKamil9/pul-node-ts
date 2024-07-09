import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeRoles() {
  return {
    role_name: faker.lorem.words(5),
  };
}
export function fakeRolesComplete() {
  return {
    id_role: faker.number.int(),
    role_name: faker.lorem.words(5),
  };
}
export function fakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
  };
}
export function fakeUserComplete() {
  return {
    id_user: faker.number.int(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    is_active: false,
    role_id: faker.number.int(),
  };
}

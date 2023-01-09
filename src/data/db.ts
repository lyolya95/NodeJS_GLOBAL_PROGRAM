import { v4 } from "uuid";
import User from "../types/user";

const db: User[] = [];

export const getUserById = (id: string): User => {
  const user = db.filter((user) => user.id === id)[0];
  return user;
};

export const createUser = (user: User): void => {
  const id = v4();
  db.push({ ...user, id, isDeleted: false });
};

export const updateUser = (user: User): User => {
  const filterUser = getUserById(user.id);
  return Object.assign(filterUser, user);
};

export const deleteUser = (id: string) => {
  const user = getUserById(id);
  user.isDeleted = true;
};

export const searchUser = (login: string, limit: number): User[] => {
  const users = db.filter((user) => {
    return user.login.indexOf(login) !== -1;
  });

  return users.length <= limit ? users : users.slice(0, limit);
};

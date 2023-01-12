import * as data from "./user.dao";
import { UserModel } from "./user.models";
import { User } from "./user.types";

export const getAllUsers = async (
  loginSubstring: string,
  limit: number
): Promise<UserModel[]> => {
  return await data.getAllUsers(loginSubstring, limit);
};

export const getUserById = async (id: string): Promise<UserModel | null> => {
  return await data.getUserById(id);
};

export const createUser = async (user: User) => {
  return await data.createUser({ ...user });
};

export const updateUser = async (user: UserModel, id: string) => {
  return await data.updateUser(user, id);
};

export const deleteUser = async (id: string) => {
  return await data.deleteUser(id);
};

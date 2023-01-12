import { Op } from "sequelize";
import { UserModel } from "./user.models";
import { User } from "./user.types";

export const getAllUsers = async (loginSubstring: string, limit: number) => {
  return UserModel.findAll({
    where: {
      login: {
        [Op.iLike]: `%${loginSubstring}%`,
      },
    },
    order: ["login"],
    attributes: { exclude: ["password"] },
    limit,
  });
};

export const getUserById = (id: string) => {
  return UserModel.findByPk(id);
};

export const createUser = (user: User) => {
  return UserModel.create({ ...user, isDeleted: false });
};

export const updateUser = (user: UserModel, id: string) => {
  const { login, password, age } = user;
  return UserModel.update(
    {
      login,
      password,
      age,
    },
    {
      where: {
        id,
        isDeleted: false,
      },
      returning: true,
    }
  );
};

export const deleteUser = (id: string) => {
  return UserModel.update(
    {
      isDeleted: true,
    },
    {
      where: {
        id,
        isDeleted: false,
      },
    }
  );
};

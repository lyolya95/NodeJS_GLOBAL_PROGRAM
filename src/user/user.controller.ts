import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import * as service from "./user.service";

const error = (res: Response) => {
  return res.status(HttpStatus.NOT_FOUND).send({
    error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const { loginSubstring = "", limit = 10 } = req.query;
  try {
    const users = await service.getAllUsers(
      loginSubstring.toString(),
      Number(limit)
    );

    return res.status(HttpStatus.OK).json(users);
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await service.getUserById(req.params.id);
    if (!user) return error(res);

    return res.status(HttpStatus.OK).json(user);
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await service.createUser(req.body);
    res.location(`/users/${newUser.id}`);
    return res.status(HttpStatus.CREATED).json(newUser);
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await service.updateUser(req.body, req.params.id);

    if (!user) return error(res);

    return res.status(HttpStatus.OK).json(user);
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await service.deleteUser(req.params.id);

    if (!user) return error(res);

    return res.status(HttpStatus.OK).send("User deleted!");
  } catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({ error: err.message });
  }
};

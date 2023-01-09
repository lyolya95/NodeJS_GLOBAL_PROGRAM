import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";

import * as DB from "../data/db";

const error = (res: Response) => {
  return res.status(HttpStatus.NOT_FOUND).send({
    error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  });
};

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = DB.getUserById(req.body.id);
  if (!user) return error(res);

  res.status(HttpStatus.OK).send({ data: user });
};

export const postCreateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  DB.createUser(req.body);
  res.status(HttpStatus.OK).send("User created!");
};

export const putUpdateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  DB.updateUser(req.body);
  res.status(HttpStatus.OK).send("User updated!");
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  DB.deleteUser(req.body.id);
  res.status(HttpStatus.OK).send("User deleted!");
};

export const getSearchUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query.query?.toString();
  const limit = req.query.limit ? +req.query.limit : 10;
  if (!query) return error(res);

  res.send(DB.searchUser(query, limit));
};

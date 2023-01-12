import Joi from "@hapi/joi";
import { User } from "./user.types";
import { NextFunction, Response, Request } from "express";
import HttpStatus from "http-status-codes";

const schema: Joi.ObjectSchema<User> = Joi.object().keys({
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
    .required(),
  age: Joi.number().integer().min(4).max(130).required(),
});

const validate = (schema: Joi.ObjectSchema<User>) => {
  return (req: Request, res: Response, next: NextFunction): boolean | void => {
    const { error } = schema.validate(req.body);

    if (error && error.isJoi) {
      res.status(HttpStatus.BAD_REQUEST).json(error.message);
      return false;
    }
    next();
  };
};

export const validateUser = validate(schema);

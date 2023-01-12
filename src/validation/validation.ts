import Joi from "@hapi/joi";
import { ValidatedRequestSchema } from "express-joi-validation";

const bodyParam: ValidatedRequestSchema["body"] = Joi.object().keys({
  login: Joi.string().required(),
  password: Joi.string()
    .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
    .required(),
  age: Joi.number().integer().min(4).max(130).required(),
});

const queryParam: ValidatedRequestSchema["query"] = Joi.object({
  query: Joi.string().required(),
});

export default { bodyParam, queryParam };

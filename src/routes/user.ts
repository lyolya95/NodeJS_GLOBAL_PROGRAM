import express from "express";
import * as usersController from "../controllers/users";
import schema from "../validation/validation";
import { createValidator } from "express-joi-validation";

const validator = createValidator();

const router = express.Router();

router.get(
  "/:id",
  validator.query(schema.bodyParam),
  usersController.getUserById
);

router.get(
  "/",
  validator.query(schema.queryParam),
  usersController.getSearchUsers
);

router.post(
  "/user",
  validator.body(schema.bodyParam),
  usersController.postCreateUser
);

router.delete("/delete/:id", usersController.deleteUser);

router.put(
  "/user/:id",
  validator.body(schema.bodyParam),
  usersController.putUpdateUser
);

export default router;

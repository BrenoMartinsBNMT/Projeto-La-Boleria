import { Router } from "express";
import { validateSchema } from "../middlewares/middlewareSchema.js";
import { CakeSchema } from "../schemas/cakesSchema.js";
import { VerifyCakesNameExist } from "../repositories/repositoryCakes.js";

import { ControllerCakes } from "../controllers/controllerCakes.js";

const CakeRouter = Router();

CakeRouter.post(
  "/cakes",
  validateSchema(CakeSchema),
  VerifyCakesNameExist,
  ControllerCakes
);

export default CakeRouter;

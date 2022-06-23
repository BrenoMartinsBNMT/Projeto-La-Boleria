import { Router } from "express";
import { validateSchema } from "../middlewares/middlewareSchema.js";
import { CakeSchema } from "../schemas/cakesSchema.js";
import { clientSchema } from "../schemas/clientSchema.js";
import { VerifyCakesNameExist } from "../repositories/repositoryCakes.js";

import { ControllerCakes } from "../controllers/controllerCakes.js";
import { ControllerClient } from "../controllers/controllerClient.js";
const CakeRouter = Router();

CakeRouter.post(
  "/cakes",
  validateSchema(CakeSchema),
  VerifyCakesNameExist,
  ControllerCakes
);
CakeRouter.post("/clients", validateSchema(clientSchema), ControllerClient);

export default CakeRouter;

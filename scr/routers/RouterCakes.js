import { Router } from "express";
import { validateSchemaCakes } from "../middlewares/middlewareCakeSchema.js";
import { CakeSchema } from "../schemas/cakesSchema.js";

import { ControllerCakes } from "../controllers/controllerCakes.js";
const CakeRouter = Router();

CakeRouter.post("/cakes", validateSchemaCakes(CakeSchema), ControllerCakes);

export default CakeRouter;

import { Router } from "express";
import { validateSchema } from "../middlewares/middlewareSchema.js";
import { clientSchema } from "../schemas/clientSchema.js";
import { ControllerClient } from "../controllers/controllerClient.js";
const RouterClient = Router();

RouterClient.post("/clients", validateSchema(clientSchema), ControllerClient);

export default RouterClient;

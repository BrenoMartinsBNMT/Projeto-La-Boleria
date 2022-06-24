import { Router } from "express";
import { validateSchema } from "../middlewares/middlewareSchema.js";
import { clientSchema } from "../schemas/clientSchema.js";
import {
  controllerGetOrdersByClientId,
  ControllerClient,
} from "../controllers/controllerClient.js";
const RouterClient = Router();

RouterClient.post("/clients", validateSchema(clientSchema), ControllerClient);
RouterClient.get("/clients/:id/orders", controllerGetOrdersByClientId);
export default RouterClient;

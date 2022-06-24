import { Router } from "express";
import {
  ControlerOrder,
  controllerGetOrderByDate,
  controllerGetOrders,
  controllerGetOrdersByOrderId,
} from "../controllers/controllerOrder.js";
import { validateSchema } from "../middlewares/middlewareSchema.js";
import { repositoryOrder } from "../repositories/repositoryOrder.js";
import { orderSchema } from "../schemas/orderSchema.js";

const orderRouter = Router();

orderRouter.post(
  "/order",
  validateSchema(orderSchema),
  repositoryOrder,
  ControlerOrder
);
orderRouter.get("/orders", controllerGetOrderByDate, controllerGetOrders);
orderRouter.get("/orders/:id", controllerGetOrdersByOrderId);
export default orderRouter;

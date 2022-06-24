import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helloWorld from "./scr/routers/helloAPI.js";
import CakeRouter from "./scr/routers/RouterCakes.js";
import RouterClient from "./scr/routers/RouterClient.js";
import orderRouter from "./scr/routers/RouterOrder.js";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());
app.use(helloWorld);
app.use(CakeRouter);
app.use(RouterClient);
app.use(orderRouter);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});

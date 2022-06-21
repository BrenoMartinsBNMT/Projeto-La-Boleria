import { Router } from "express";
import { HelloWorld } from "../controllers/ControllerHelloWorld.js";

const helloWorld = Router();

helloWorld.get("/", HelloWorld);

export default helloWorld;

import db from "../../db.js";
import { VerifyCakesNameExist } from "../repositories/repositoryCakes.js";
export async function ControllerCakes(req, res) {
  try {
    const { name, price, image, description } = req.body;
    await db.query(
      "INSERT INTO cakes (name,price,image,description) VALUES ($1,$2,$3,$4)",
      [name, price, image, description]
    );
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
}

import db from "../../db.js";

export async function ControllerClient(req, res) {
  const { name, address, phone } = req.body;

  try {
    await db.query(
      "INSERT INTO clients (name,address,phone)VALUES ($1,$2,$3)",
      [name, address, phone]
    );
    res.sendStatus(201);
  } catch (e) {
    return res.status(500).send(e);
  }
}

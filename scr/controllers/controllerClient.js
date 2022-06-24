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

export async function controllerGetOrdersByClientId(req, res) {
  try {
    const { id } = req.params;
    const infosOrder = await db.query(
      `SELECT user_id,quantity,create_at,total_price, cakes.name 
      FROM orders 
      JOIN cakes 
      ON orders.cake_id = cakes.id 
      JOIN clients ON clients.id = $1
  `,
      [id]
    );
    let infosOrderJson = [];
    infosOrder.rows.map((e) => {
      infosOrderJson.push({
        orderId: e.user_id,
        quantity: e.quantity,
        createdAt: e.create_at,
        totalPrice: e.total_price,
        cakeName: e.name,
      });
    });
    res.send(infosOrderJson);
  } catch {}
}

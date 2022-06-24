import db from "../../db.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

export async function ControlerOrder(req, res) {
  try {
    const { clientId, cakeId, quantity, totalPrice } = req.body;

    await db.query(
      "INSERT INTO orders  (user_id,cake_id,quantity,total_price) VALUES ($1,$2,$3,$4)",
      [clientId, cakeId, quantity, totalPrice]
    );
    res.sendStatus(201);
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function controllerGetOrders(req, res) {
  try {
    const client = await db.query(
      "SELECT clients.id AS client_id ,clients.name AS user ,clients.address,clients.phone,cakes.id AS cakes_id,cakes.name,cakes.price,cakes.description,cakes.image ,orders.create_at,orders.id AS orders_id, orders.quantity,orders.total_price FROM orders JOIN clients ON clients.id = orders.user_id JOIN cakes ON cakes.id = orders.cake_id"
    );
    let data = [];
    if (client.rows.length === 0) {
      return res.sendStatus(404);
    }
    client.rows.map((element) => {
      data.push({
        client: {
          id: element.client_id,
          name: element.user,
          address: element.address,
          phone: element.phone,
        },
        cake: {
          id: element.cakes_id,
          cake: element.name,
          price: element.price,
          description: element.description,
          image: element.image,
        },
        orderId: element.orders_id,
        createAt: element.create_at,
        quantity: element.quantity,
        totalPrice: element.total_price,
      });
    });
    res.send(data);
  } catch (e) {
    return res.send(e);
  }
}

export async function controllerGetOrderByDate(req, res, next) {
  try {
    const { date } = req.query;

    console.log(date);
    if (!date) {
      next();
      return;
    }
    const infos = await db.query(
      "SELECT clients.id AS client_id ,clients.name AS user ,clients.address,clients.phone,cakes.id AS cakes_id,cakes.name,cakes.price,cakes.description,cakes.image ,orders.create_at,orders.id AS orders_id, orders.quantity,orders.total_price FROM orders JOIN clients ON clients.id = orders.user_id JOIN cakes ON cakes.id = orders.cake_id AND orders.create_at::date = $1",
      [date]
    );
    if (infos.rows.length === 0) {
      return res.status(404).send(data.rows);
    }
    const infosJson = [];
    infos.rows.map((element) => {
      infosJson.push({
        client: {
          id: element.client_id,
          name: element.user,
          address: element.address,
          phone: element.phone,
        },
        cake: {
          id: element.cakes_id,
          cake: element.name,
          price: element.price,
          description: element.description,
          image: element.image,
        },
        orderId: element.orders_id,
        createAt: element.create_at,
        quantity: element.quantity,
        totalPrice: element.total_price,
      });
    });
    res.send(infosJson);
  } catch (e) {
    return res.send(e);
  }
}

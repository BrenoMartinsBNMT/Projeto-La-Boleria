import db from "../../db.js";

export async function repositoryOrder(req, res, next) {
  const { clientId, cakeId } = req.body;

  const ifUserExist = await db.query("SELECT id FROM clients WHERE id = $1", [
    clientId,
  ]);
  const ifCakeExist = await db.query("SELECT id FROM cakes WHERE id = $1", [
    cakeId,
  ]);
  if (ifCakeExist.rows.length === 0 || ifUserExist.rows.length === 0) {
    return res.sendStatus(404);
  }
  next();
}

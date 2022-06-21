import db from "../../db.js";

export async function VerifyCakesNameExist(req, res, next) {
  const { name } = req.body;
  const nameCakesExist = await db.query(
    "SELECT name FROM cakes WHERE name = $1",
    [name]
  );

  if (nameCakesExist.rows.length > 0) {
    return res.sendStatus(409);
  }
  next();
}

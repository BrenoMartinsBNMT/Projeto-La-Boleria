export function validateSchemaCakes(schema) {
  return async function (req, res, next) {
    const { error } = schema.validate(req.body);
    console.log(req.body);
    try {
      if (error)
        return res
          .status(422)
          .send(error.details.map(({ message }) => message));
      next();
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };
}

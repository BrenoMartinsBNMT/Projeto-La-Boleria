import Joi from "joi";

const regex = /https?:\/\//;

export const CakeSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().greater(0).required(),
  description: Joi.string(),
  image: Joi.string().pattern(regex),
});

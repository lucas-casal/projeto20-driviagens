import Joi from "joi"
export const createFlightSchema = Joi.object({
    origin:Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.date().raw().required()
})
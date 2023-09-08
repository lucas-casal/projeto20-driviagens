import Joi from "joi"
export const createTravelSchema = Joi.object({
    flightId:Joi.number().min(1).required(),
    passengerId: Joi.number().min(1).required()
})
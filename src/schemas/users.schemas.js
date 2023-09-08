import Joi from "joi";

export const createPassengerSchema = Joi.object({
    firstName:Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required()
})

export const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})


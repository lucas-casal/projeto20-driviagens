import { Router } from "express";
import { validateSchemas } from "../middlewares/validateSchema.js";
import { usersControllers } from "../controllers/users.controllers.js";
import { createPassengerSchema } from "../schemas/users.schemas.js";

const usersRouter = Router()

usersRouter.post(`/passengers`, validateSchemas(createPassengerSchema), usersControllers.create)
usersRouter.get(`/passengers/travels`, usersControllers.getAll)


export default usersRouter
import { Router } from "express";
import { validateSchemas } from "../middlewares/validateSchema.js";
import { createCitySchema } from "../schemas/cities.schemas.js";
import { citiesControllers } from "../controllers/cities.controllers.js";

const citiesRouter = Router()

citiesRouter.post(`/cities`, validateSchemas(createCitySchema), citiesControllers.create)

export default citiesRouter;
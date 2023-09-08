import {  Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { flightsControllers } from "../controllers/flights.controllers.js";
import { validateSchemas } from "../middlewares/validateSchema.js";
import { createFlightSchema } from "../schemas/flights.schemas.js";

const flightsRouter = Router();

flightsRouter.post('/flights', validateSchemas(createFlightSchema), flightsControllers.create)

export default flightsRouter;

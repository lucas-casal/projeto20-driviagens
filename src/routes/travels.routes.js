import {  Router } from "express";
import { validateSchemas } from "../middlewares/validateSchema.js";
import { travelsControllers } from "../controllers/travels.controllers.js"
import { createTravelSchema } from "../schemas/travels.schemas.js";
const travelsRouter = Router();

travelsRouter.post('/travels', validateSchemas(createTravelSchema), travelsControllers.create)

export default travelsRouter;

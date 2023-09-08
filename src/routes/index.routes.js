import { Router } from "express";
import usersRouter from "./users.routes.js";
import flightsRouter from "./flights.routes.js";
import citiesRouter from "./cities.routes.js";
import travelsRouter from "./travels.routes.js";

const router = Router();

router.use(usersRouter)
router.use(citiesRouter)
router.use(flightsRouter)
router.use(travelsRouter)

export default router;

import { Router } from "express";
import usersRouter from "./users.routes.js";
import flightsRouter from "./flights.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use(usersRouter)
router.use(citiesRouter)
router.use(flightsRouter)

export default router;

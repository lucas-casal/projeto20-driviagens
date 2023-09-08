import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js";

const create = async (req, res) => {
    const {origin, destination, date} = req.body;

    const flight = await flightsServices.create(origin, destination, date)
    
    res.status(httpStatus.CREATED).send(flight)
}
export const flightsControllers = {create}
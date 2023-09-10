import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js";

const create = async (req, res) => {
    const {origin, destination, date} = req.body;

    const flight = await flightsServices.create(origin, destination, date)
    
    res.status(httpStatus.CREATED).send(flight)
}

const getAll = async (req, res) => {
    const {origin, destination, "bigger-date": bigger, "smaller-date": smaller, page} = req.query

    const flights = await flightsServices.getAll(origin, destination, bigger, smaller, page)

    return res.send(flights)
}

export const flightsControllers = {create, getAll}
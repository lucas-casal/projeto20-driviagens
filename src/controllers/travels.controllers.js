import httpStatus from "http-status";
import { travelsServices } from "../services/travels.services.js";

const create = async (req, res) => {
    const {flightId, passengerId} = req.body;

    const travel = await travelsServices.create(flightId, passengerId)
    
    res.status(httpStatus.CREATED).send(travel)
}
export const travelsControllers = {create}
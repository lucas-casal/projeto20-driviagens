import { travelsRepository } from "../repositories/travels.repository.js";
import { citiesRepository } from "../repositories/cities.repository.js";
import dayjs from "dayjs";
import { errors } from "../errors/errors.js";
import { flightsRepository } from "../repositories/flights.repository.js";
import { usersRepository } from "../repositories/users.repository.js";

const create = async (flightId, passengerId) => {
    
    const flight = (await flightsRepository.getById(flightId)).rows[0]
console.log(flight)
    if (!flight) throw errors.notFound("Voo")

    const passenger = (await usersRepository.getById(passengerId)).rows[0]
console.log(passenger)
    if (!passenger) throw errors.notFound("Passageiro")

    const travel = (await travelsRepository.create(passengerId, flightId)).rows[0]

    return travel
}


export const travelsServices = {create}
import { flightsRepository } from "../repositories/flights.repository.js";
import { citiesRepository } from "../repositories/cities.repository.js";
import dayjs from "dayjs";
import { errors } from "../errors/errors.js";

const create = async (origin, destination, date) => {
    if (origin === destination) throw errors.invalidOrigDest("Iguais")
    const cities = (await citiesRepository.getById(origin, destination)).rows

    if (cities.length < 2) {
        if (cities.length === 0) throw errors.invalidOrigDest("Origem e destino")
        if (parseInt(cities[0].id) === parseInt(origin)) throw errors.invalidOrigDest("Destino")
        throw errors.invalidOrigDest("Origem")
    }

    if(dayjs() - dayjs(date) > 0) throw errors.invalidDate()

    const dateFormated = dayjs(date).format('YYYY-MM-DD')
    const flight = (await flightsRepository.create(origin, destination, dateFormated)).rows[0]

    return flight
}

const getAll = async (origin, destination, bigger, smaller) => {
    if (dayjs(bigger) < dayjs(smaller)) throw errors.invalidBigSmall()
    const flights = (await flightsRepository.getAll(origin, destination, bigger, smaller)).rows

    flights.map(x => {
        const data = dayjs(x.date).format('DD-MM-YYYY')
        x.date = data
    })
    return flights
}



export const flightsServices = {create, getAll}
import { errors } from "../errors/errors.js";
import { citiesRepository } from "../repositories/cities.repository.js";

const create = async (name) => {
    if (name.length > 50 || name.length < 2) throw errors.invalidLength("Nome", "between", 2, 50)
    const registered = (await citiesRepository.getByName(name)).rows[0]

    if (registered) throw errors.conflict("Nome");

    const done = (await citiesRepository.create(name)).rows[0]

    return done;
}
export const citiesServices = {create}
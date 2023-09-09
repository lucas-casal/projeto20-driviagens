import { errors } from "../errors/errors.js"
import { usersRepository } from "../repositories/users.repository.js"

const create = (firstName, lastName) => {
    return usersRepository.create(firstName, lastName)
}

const getAll = async (name) => {
    const users = (await usersRepository.getAll('%'+name+'%')).rows
    if (users.length > 10) throw errors.toomany()

    
}

export const usersServices = {create, getAll}
import { usersRepository } from "../repositories/users.repository.js"

const create = (firstName, lastName) => {
    return usersRepository.create(firstName, lastName)
}

export const usersServices = {create}
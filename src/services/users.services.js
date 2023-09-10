import { errors } from "../errors/errors.js"
import { usersRepository } from "../repositories/users.repository.js"

const create = (firstName, lastName) => {
    return usersRepository.create(firstName, lastName)
}

const getAll = async (name, page) => {
    if (isNaN(page) || page < 1) throw errors.invalidPage()
    const users = (await usersRepository.getAll(name, page)).rows
    if (users.length > 10) throw errors.toomany()

    users.map(x =>{
        delete x.passengerId
    })
    return users

}

export const usersServices = {create, getAll}
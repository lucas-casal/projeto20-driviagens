import bcrypt from 'bcrypt'
import { v4 as uuid } from "uuid";
import { usersServices } from '../services/users.services.js';
import httpStatus from 'http-status';
import { errors } from '../errors/errors.js';

const create = async (req, res) => {
    const {firstName, lastName} = req.body;
    
    const registeredPassenger = (await usersServices.create(firstName, lastName)).rows[0]

    res.status(httpStatus.CREATED).send(registeredPassenger)
}

const getAll = async (req, res) => {
    const {name, page} = req.query;

    const users = await usersServices.getAll(name, page)

    res.send(users)
}

export const usersControllers = {create, getAll}
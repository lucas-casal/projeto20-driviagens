import httpStatus from 'http-status';
import { citiesServices } from '../services/cities.services.js'

const create = async (req, res) => {
    const {name} = req.body;
    
    const registeredInfo = await citiesServices.create(name);

    res.status(httpStatus.CREATED).send(registeredInfo)
}



export const citiesControllers={create}
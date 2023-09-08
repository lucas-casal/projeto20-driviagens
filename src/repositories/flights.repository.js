import { db } from "../database/database.js";

const create = (origin, destination, date) => {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id, origin, destination, date;`, [origin, destination, date])
}

const getById = (id) => {
    return db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
}


export const flightsRepository = {create, getById}
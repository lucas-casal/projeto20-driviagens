import { db } from "../database/database.js";

const create = (passengerId, flightId) => {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2) RETURNING id, "passengerId", "flightId";`, [passengerId, flightId])
}


export const travelsRepository = {create}
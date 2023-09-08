import { db } from "../database/database.js";

const create = (first, last) => {
    return db.query(`INSERT INTO passengers("firstName", "lastName") VALUES ($1, $2) RETURNING id, "firstName", "lastName";`, [first, last])
}

export const usersRepository = {create}
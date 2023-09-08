import { db } from "../database/database.js";

const create = (first, last) => {
    return db.query(`INSERT INTO passengers("firstName", "lastName") VALUES ($1, $2) RETURNING id, "firstName", "lastName";`, [first, last])
}

const getById = (id) => {
    return db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
}

export const usersRepository = {create, getById}
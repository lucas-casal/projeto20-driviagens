import { db } from "../database/database.js"
const create = (name) => {
    return db.query(`INSERT INTO cities (name) VALUES ($1) RETURNING id, name;`, [name])
}

const getByName = (name) => {
    return db.query(`SELECT * FROM cities WHERE name=$1;`, [name] )
}

const getById = (a, b=0) => {
    return db.query(`SELECT * FROM cities WHERE id=$1 OR id=$2;`, [a, b] )
}

export const citiesRepository = {create, getByName, getById}
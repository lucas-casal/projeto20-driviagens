import { db } from "../database/database.js";

const create = (first, last) => {
    return db.query(`INSERT INTO passengers("firstName", "lastName") VALUES ($1, $2) RETURNING id, "firstName", "lastName";`, [first, last])
}

const getById = (id) => {
    return db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
}

const getAll = (name, page=1) => {
    const info = name ? ['%'+name+'%'] : []
    info.push(parseInt(page-1)*10)
    return db.query(`
        SELECT COUNT(travels.*) AS travels, passengers."firstName" || ' ' || passengers."lastName"  as passenger, passengers.id as "passengerId" from travels
        RIGHT JOIN passengers ON travels."passengerId" = passengers.id
        ${name ? `WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE $1` : ``}
        GROUP BY passengers.id, passengers."firstName", passengers."lastName"
        ORDER BY travels DESC, passenger ASC
        LIMIT 10
        OFFSET $${name ? '2' : '1'}
        ;
    `, info)
}

export const usersRepository = {create, getById, getAll}
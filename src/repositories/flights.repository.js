import dayjs from "dayjs";
import { db } from "../database/database.js";

const create = (origin, destination, date) => {
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id, origin, destination, date;`, [origin, destination, date])
}

const getById = (id) => {
    return db.query(`SELECT * FROM flights WHERE id=$1;`, [id])
}

const getAll = (origin, destination, bigger, smaller) => {
    let biggerFormat;
    if (bigger){
        const day = bigger.substring(0,2);
        const month = bigger.substring(3,5);
        const year = bigger.substring(6)
        biggerFormat = `${year}-${month}-${day}`
    }
    let smallerFormat;
    if (smaller){
        const day = smaller.substring(0,2);
        const month = smaller.substring(3,5);
        const year = smaller.substring(6)
        smallerFormat = `${year}-${month}-${day}`
    }

    const parameters = [];
    origin ? parameters.push('origin') : ''
    destination ? parameters.push('destination') : ''
    bigger ? parameters.push('bigger') : ''
    smaller ? parameters.push('smaller') : ''

    const values = []
    origin ? values.push(origin) : ''
    destination ? values.push(destination) : ''
    bigger ? values.push(biggerFormat) : ''
    smaller ? values.push(smallerFormat) :'' 

    function queryConstructor(){
        let queryWhere = parameters.length > 0 ? 'WHERE' : '';
        let count = 0;

        parameters.map(x =>{
            switch (x){
                case 'origin':
                    count++
                    queryWhere += ` o.name LIKE $${count}`;
                    break;
                
                case 'destination': 
                    count++
                    if (count >= 2) {
                        queryWhere += ` AND`
                    }
                    queryWhere += ` d.name LIKE $${count}`;
                    break;

                case 'bigger':
                    count++
                    if (count >= 2) {
                        queryWhere += ` AND`
                    }
                    queryWhere += ` flights.date <= $${count}`;
                    break;

                case 'smaller':
                    count++
                    if (count >= 2) {
                        queryWhere += ` AND`
                    }
                    queryWhere += ` flights.date >= $${count}`;
                    break;

            }
        })

        return queryWhere;
        
    }
    console.log(queryConstructor(), values)
    return db.query(`
    SELECT flights.id, o.name as origin, d.name as destination, flights.date
    FROM flights
    JOIN cities as o ON flights.origin = o.id
    JOIN cities as d ON flights.destination = d.id
    ${queryConstructor()}
    ORDER BY date
    ; `,values)
}


export const flightsRepository = {create, getById, getAll}
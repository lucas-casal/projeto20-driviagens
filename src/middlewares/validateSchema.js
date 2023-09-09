import httpStatus from "http-status"

export function validateSchemas (schema){
    return (req, res, next) => {
    const {date} = req.body;
    let newBody = req.body;

    if (date) {
        delete newBody.date
        const day = date.substring(0,2);
        const month = date.substring(3,5);
        const year = date.substring(6)
        newBody.date = `${year}-${month}-${day}`
    }
    const validation = schema.validate(newBody, {abortEarly: false})

        if (validation.error){
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors)
        } 
        
        next()
    }
}
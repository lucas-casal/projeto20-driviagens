const notFound = (resource = "Item") => {
    return {
        type: "notFound",
        message: `${resource} não foi encontrado(a)`
    }
}

const conflict = (resource = "Item") => {
    return {
        type: "conflict",
        message: `${resource} digitado já existe`
    }
}

const invalidLength = (resource, rule, a=0, b=0) => {
    let message;
    switch(rule){
        case "more":
            message = `${resource} deve ter, pelo menos, ${a} caracteres!`;
            break
        case "less":
            message = `${resource} deve ter, no máximo, ${a} caracteres!`;
            break
        case "between":
            message = `${resource} deve ter de ${a} a ${b} caracteres!`;
            break
    }

    return {
        type: "invalidData",
        message
    }
}

const invalidOrigDest = (rule) => {
    let message;
    switch(rule){
        case "Origem":
            message = "Origem digitada é inválida!";
            break
        case "Destino":
            message = "Destino digitado é inválido!";
            break
        case "Origem e destino":
            message = "Origem e destino digitados são inválidos!";
            break
        case "Iguais":
            message = "Origem e destino digitados são iguais, mas deveriam ser diferentes!";
            break
    }

    return {
        type: "invalidData",
        message
    }
}

const invalidDate = () => {
    return {
        type: "invalidData",
        message: "A data digitada já passou. Só é permitido registrar voos que ocorram de hoje em diante."
    }
}

export const errors = {notFound, conflict, invalidLength, invalidOrigDest, invalidDate}
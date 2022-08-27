import fetch from "node-fetch";

function throwError(erro){
    throw new Error(erro.message)
}
const ArrayUrl = (x) => {
    /*let array = []
    for (const item of x) {
        array = array.concat(Object.values(item))
    }
    return array*/
    return x.map(x => Object.values(x).join())
}

async function Status(arrayUrl){
    try{
        const status_list = await Promise.all(arrayUrl.map(async url => {
            const res = await fetch(url)
            return `${res.status} - ${res.statusText}`
        }))
        return status_list
    } catch (erro) {throwError(erro)}
}

async function validaUrl(x){
    const array_url = ArrayUrl(x)
    const validation = await Status(array_url)
    const result = x.map((objeto, indice) =>({...objeto, status: validation[indice]}))
    return result
}

export {validaUrl}
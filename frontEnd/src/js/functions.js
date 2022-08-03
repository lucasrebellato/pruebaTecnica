
const regex = /(\d+)/g;

export const getNumber = (data) => (JSON.stringify(data).match(regex));

export const haveNumber = (dato) => regex.test(dato) ? `Module ${getNumber(dato)}` : dato;

export function converterArr (arr) { 
    const aux = [];   
    
    for(let element of arr){
        aux.push(getNumber(element))
    }

    return aux;
}
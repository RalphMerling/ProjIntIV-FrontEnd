//Esse arquivo será responsável por planejar todas as requisições que o front end (rn) poderá realizar na API
//async/awat

export const API_URL = 'http://localhost:8081' //conexão com o Back
let tokenJwt = null;
const TIMEOU_MS = 10_000; //10 segundos de espera após a requisição



export async function request(method, path, body) {
    const controler = new AbortController(); //É responsável por cancelar a request se exceder o tempo limite.
    const timer = setTimeout()


    const api = {
        get: (path) => request('GET', path),
        post: (path) => request('POST' , path, Body),
        put: (path, body) => request('PUT', path, body),
        delete: (path) => request('DELETE', path),        
    }



} 
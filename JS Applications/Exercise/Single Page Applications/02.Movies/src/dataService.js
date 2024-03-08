import { get } from "./request.js";
const baseUrl = 'http://localhost:3030';
const endpoints = {
    catalog: "/data/movie",
}

async function getAllMovies(){
    return await get(baseUrl + endpoints.catalog);
}

export {
    getAllMovies,
}
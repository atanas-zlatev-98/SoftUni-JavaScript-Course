import { get, post,del } from "./requester.js";

const endpoint = {
    getAllIdea: 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    singleIdea: 'data/ideas/',
}

async function getAllIdeas(){
    return await get(endpoint.getAllIdea);
}
async function getIdea(id){
    return await get(endpoint.singleIdea + id)
}

async function create(data){
    return await post(endpoint.singleIdea,data);

}

async function removeIdea(id){
    return await del(endpoint.singleIdea + id);
}

export const dataService = {
getAllIdeas,
getIdea,
create,
removeIdea,
}
import sendRequest from "./send-request";
const BASE_URL = '/api/listItems';

export async function create(data) {
    return sendRequest(BASE_URL, 'POST', data)
}

export async function getAllForUser() {
    return sendRequest(BASE_URL)
}

export async function remove(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
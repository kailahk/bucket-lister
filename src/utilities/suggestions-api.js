import sendRequest from "./send-request";
const BASE_URL = '/api/suggestions';

export async function getSuggestions() {
    return sendRequest(BASE_URL)
}
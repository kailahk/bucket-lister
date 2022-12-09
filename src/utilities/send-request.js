import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
    // fetch acceps an options object as the 2nd arg
    // used to inclue a data payload, set headers, specify the method, etc.
    const options = { method };
    if (payload) {
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Need to add an authorization header
        // use the Logical OR assignment operator
        options.headers ||= {};
        options.headers.Authorization = `Bearer ${token}`; 
    }
    const res = await fetch(url, options);
    // if res.ok is false, then something went wrong
    if (res.ok) return res.json();
    throw new Error('Bad Request')
}
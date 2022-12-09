// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token)
  // TODO: return user object from token instead
  return getUser();
}

export async function login(userData) {
    console.log('login')
    const token = await usersAPI.login(userData);
    localStorage.setItem('token', token)
    return getUser();
}

export function logOut() {
    localStorage.removeItem('token');
}

export function getToken() {
    // getItem will return null if the key does not exist
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    // a jwt's expiration is expressed in seconds, not miliseconds
    if (payload.exp * 1000 < Date.now()) {
        // Token has expired
        localStorage.removeItem('token');
        return null;
    }
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
    // we can't forget how to use .then with promises
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr))
}
import API from '../FetchData';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchUsers() {
  let url = API + '/users' ;
  return fetch(url)
    .then( (response) => response.json() );
}

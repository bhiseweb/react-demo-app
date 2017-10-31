import API from '../FetchData';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchPost() {
  let url = API + '/posts' ;
  return fetch(url)
    .then( (response) => response.json() );
}

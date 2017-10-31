import API from '../FetchData';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchPhotos() {
  let url = API + '/photos' ;
  return fetch(url)
    .then( (response) => response.json() );
}

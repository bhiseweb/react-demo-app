import API from '../FetchData';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchAlbums() {
  let url = API + '/albums' ;
  return fetch(url)
    .then( (response) => response.json() );
}

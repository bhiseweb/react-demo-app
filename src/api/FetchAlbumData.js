export function fetchAlbums() {
  let url = URL + 'api/albums' ;
  return fetch(url, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        },
      })
    .then( (response) => response.json() );
}

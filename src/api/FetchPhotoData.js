export function fetchPhotos() {
  let url = URL + 'api/photos' ;
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

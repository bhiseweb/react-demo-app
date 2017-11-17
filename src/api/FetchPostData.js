export function fetchPost() {
  let url = URL + 'api/post' ;
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

const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        };

export function fetchUsers() {
  let url = URL + 'api/users' ;
  return fetch(url, {
        mode: 'cors',
        headers: headers,
      })
    .then( (response) => response.json() );
}

export function createUser(user) {
  let url = URL + 'api/users';
  return fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: headers
      })
    .then( (response) => {response.json() } );
}


const rootUrl = 'https://serene-crag-32560.herokuapp.com';

const fetchBoggleSolutions = (boardString) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ boardString })
  };

  return fetch(rootUrl+'/solve', requestOptions)
    .then(response => response.json())
}


module.exports = { fetchBoggleSolutions }
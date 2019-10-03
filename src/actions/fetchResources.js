const fetchResources = () => {
  return fetch('http://localhost:3001/api/v1/resources')
  .then(resp => resp.json())
  .then(json => console.log(json))
}

export default fetchResources
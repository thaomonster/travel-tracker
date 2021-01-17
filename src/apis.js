export function getData(dataType) {
  fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
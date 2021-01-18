function getData(path) {
  return fetch(path)
    .then(response => response.json())
    .catch(error => console.log(error))
}

let apiCalls = {
  getTravelerData() {
    return getData('http://localhost:3001/api/v1/travelers/22')
  },

  getTripsData() {
    return getData('http://localhost:3001/api/v1/trips')
  },

  getDestinationsData() {
    return getData('http://localhost:3001/api/v1/destinations')
  }
}

export default apiCalls;

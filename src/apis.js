function getData(path) {
  return fetch(path)
    .then(response => response.json())
    .catch(error => console.log(error))
}

function postData(path, data) {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
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
  },

  addNewTrip(trip) {
    return postData('http://localhost:3001/api/v1/trips', trip)
  },
}

export default apiCalls;

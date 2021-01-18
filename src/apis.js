function getData(path) {
  return fetch(path)
    .then(response => response.json())
    .catch(error => console.log(error))
}

// function postData(path) {
//   return fetch('http://localhost:3001/api/v1/trips', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       id: trips.id,
//       userID: traveler.id,
//       destinationID: destinations.id,
//       travelers: inputNumOfTravelers.value,
//       date: 'YYYY/MM/DD',
//       duration: 0,
//       status: 'pending',
//       suggestedActivities: []
//     })
//   })
// }

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

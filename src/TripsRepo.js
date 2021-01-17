import Destinations from './Destinations'

class TripsRepo {
  constructor(trips) {
    this.trips = trips || []
  }

  filterTripsByYear(year) {
    return this.trips.filter(trip => {
      const splitDate = trip.date.split('/')[0]
      return splitDate === year
    })
  }

  // calculateTotalTripCostPerYear(trips) {
  //   return this.trips.reduce((totalCost, trip) => {
  //     Destinations.forEach(destination => {
  //       if (trip.destinationID === destination.id) {
  //         acc += 
  //       }
  //     })
  //     return acc
  //   }, 0)
  // }
}

export default TripsRepo; 
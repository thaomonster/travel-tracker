
class TripRepo {
  constructor(trips) {
    this.trips = trips || []
  }

  filterTripsByYear(year) {
    return this.trips.filter(trip => {
      const splitDate = trip.date.split('/')[0]
      console.log(splitDate)
      return splitDate === year
    })
  }

  calculateTotalTripCostPerYear(destinations, travelerID) {
    return this.trips.reduce((totalCost, trip) => {
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id && trip.userID === travelerID) {
          const costWithoutFee = (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)
          totalCost = Math.round(costWithoutFee * 1.1)
        }
      })
      return totalCost
    }, 0)
  }
}

export default TripRepo; 
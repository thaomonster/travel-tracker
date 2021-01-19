class TripsRepo {
  constructor(trips) {
    this.trips = trips || []
  }

  filterTripsByYear(year) {
    return this.trips.filter(trip => {
      return trip.date.split('/')[0] === year && trip.status === 'approved';
    })
  }

  filterPendingTrips(year) {
    return this.trips.filter(trip => {
      return trip.date.split('/')[0] > year && trip.status === 'pending';
    })
  }

  calculateTotalTripCostPerYear(destinations, travelerID) {
    return this.trips.reduce((totalCost, trip) => {
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id && trip.userID === travelerID) {
          let costWithoutFee = (destination.estimatedLodgingCostPerDay * trip.duration) + (destination.estimatedFlightCostPerPerson * trip.travelers)
          totalCost = Math.round(costWithoutFee * 1.1)
        }
      })
      return totalCost
    }, 0)
  }
}

export default TripsRepo; 
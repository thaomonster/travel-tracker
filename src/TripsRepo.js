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

  calculateTotalTripCost() {
    
  }
}

export default TripsRepo; 
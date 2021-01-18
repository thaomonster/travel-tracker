class DestinationsRepo {
  constructor(destinations) {
    this.destinations = destinations || [];
  }

  filterDestinationsByIds(trips) {
    return trips.reduce((acc, trip) => {
      this.destinations.forEach(destination => {
        if(trip.destinationID === destination.id) {
          acc.push(destination)
        }
      })
      return acc
    }, [])
  }
}

export default DestinationsRepo;
const domUpdates = {
  displayTotalCost(element, totalCost) {
    element.innerHTML = '';
    element.innerHTML = `Total cost with 10% Travel Agent Fee: ${totalCost}`;
  },

  displayAllTrips(element) {
    element.innerHTML = '';
    element.innerHTML += `${this.displaySelected()}`
  },

  displaySelectedTrips(element, trips, destinations) {
    element.innerHTML = ''
    element.innerHTML = `<section>
    ${this.displayTripDetails(trips, destinations)}
    </section>`
  },

  displayTripDetails(trips, destinations) {
    let element = ''
    trips.forEach(trip => {
      destinations.forEach(destination => {
        if(trip.destinationID === destination.id) {
          element += `<section>
          <p>${trip.date}</p>
          <p>${trip.duration} days</p>
          <p>${destination.destination}</p>
          <img src=${destination.image} width="50px" height="50px">
          </section>`
        }
      })
    })
    return element
  },

}

export default domUpdates;
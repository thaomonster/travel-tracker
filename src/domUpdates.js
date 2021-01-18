const domUpdates = {
  displayTotalCost(element, totalCost) {
    element.innerHTML = '';
    element.innerHTML = `Total cost with 10% Travel Agent Fee: $git add${totalCost}`;
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
          <p>Departure Date: ${trip.date}</p>
          <p>Duration: ${trip.duration} days</p>
          <p>Location: ${destination.destination}</p>
          <img src=${destination.image} width="50px" height="50px">
          </section>`
        }
      })
    })
    return element
  },

  displayDestinationDropDown(element, destinationList) {
    destinationList.forEach(destination => {
      const opt = document.createElement('option');
      opt.innerHTML = destination
      opt.value = destination
      element.appendChild(opt)
    })
  },

  displayEstimatedCost(element, totalCost) {
    element.innerText = ''
    element.innerText = `Estimated Cost: $${totalCost}`
  }
}

export default domUpdates;
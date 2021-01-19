const domUpdates = {
  displayTotalCost(element, totalCost) {
    element.innerHTML = '';
    element.innerHTML = `Total cost with 10% Travel Agent Fee: $${totalCost}`;
  },

  displayAllTrips(element) {
    element.innerHTML = '';
    element.innerHTML += `${this.displaySelected()}`
  },

  displaySelectedTrips(element, title, trips, destinations) {
    element.innerHTML = '';
    element.innerHTML = `
    <section>
      <h2>${title}</h2>
    ${this.displayTripDetails(trips, destinations)}
    </section>`;
  },

  displayTripDetails(trips, destinations) {
    let element = '';
    trips.forEach(trip => {
      destinations.forEach(destination => {
        if(trip.destinationID === destination.id) {
          element += `<section>
          <p>Departure Date: ${trip.date}</p>
          <p>Duration: ${trip.duration} days</p>
          <p>Location: ${destination.destination}</p>
          <img src=${destination.image} alt="image of ${destination.destination}">
          </section>`
        }
      })
    })
    return element
  },

  displayDestinationDropDown(element, destinationList) {
    destinationList.forEach(destination => {
      const opt = document.createElement('option');
      opt.innerHTML = destination;
      opt.value = destination;
      element.appendChild(opt);
    })
  },

  displayEstimatedCost(element, totalCost) {
    element.innerText = '';
    element.innerText = `Estimated Cost With 10% Travel Agent Fee: $${totalCost}`;
  },

  displayModal(element) {
    element.style.display = 'block';
  },

  exitModal(element) {
    element.style.display = 'none';
  },
}

export default domUpdates;
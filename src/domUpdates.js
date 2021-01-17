const domUpdates = {
  displayTotalCost(element, destinations, travelerID, tripRepo) {
    element.innerHTML = `Total Cost By Year    
    <select>
      <option>2019</option>
      <option>2020</option>
    </select> with 10% Travel Agent Fee: ${tripRepo.calculateTotalTripCostPerYear(destinations, travelerID)}`
  }
}

export default domUpdates;
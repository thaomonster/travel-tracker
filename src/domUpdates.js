import {TripsRepo} from './TripRepo';

const domUpdates = {
  displayTotalCost() {
    TripsRepo.calculateTotalTripCostPerYear();
  }
}

export default domUpdates;
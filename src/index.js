import './css/index.scss';
import Traveler from '../src/Traveler';
import Trip from './Trip';
import TripsRepo from './TripRepo';
import Destination from './Destination';
import DestinationsRepo from './DestinationRepo'
import apiCalls from '../src/apis'
import domUpdates from '../src/domUpdates'

const displayPastTripsElement = document.querySelector('.past-trip-js');
const displayPresentTripsElement = document.querySelector('.present-trip-js');
const displayUpcomingTripsElement = document.querySelector('.upcoming-trip-js');
const displayPendingTripsElement = document.querySelector('.pending-trip-js');
const inputNumOfTravelers = document.querySelector('.number-of-travelers')
const destinationDropDownList = document.querySelector('.destination-drop-down')
const yearDropDown = document.querySelector('.year-drop-down-js');
const totalCostElement = document.querySelector('.total-cost-js');

let traveler, trips, tripsRepo, destinations, destinationsRepo;
const destinationNames = []
const todaysDate = "2020/01/01";

yearDropDown.addEventListener('change', getTotalCostByYear);

Promise.all([apiCalls.getTravelerData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
.then(data => {
    let destArr = []
    let userTrips = data[1].trips.filter(trip => trip.userID === data[0].id)
    data[2].destinations.filter(destination => {
      userTrips.forEach(trip => {
        if (destination.id === trip.destinationID) {
          destArr.push(destination)
        }
        if (!destinationNames.includes(destination.destination)) {
          destinationNames.push(destination.destination)
        }
      })
    })
   const travelObj = data.reduce((acc, current) => {
      acc = {
        id: data[0].id,
        name: data[0].name,
        travelerType: data[0].travelerType,
        trips: userTrips,
        destinations: destArr
      }
      return acc
    }, {})
    instantiateClasses(travelObj)
    displayTrips()
  })
  
function instantiateClasses(obj) {
  traveler = new Traveler(obj);
  trips = obj.trips.map(trip => new Trip(trip));
  tripsRepo = new TripsRepo(trips);
  destinations = obj.destinations.map(destination => new Destination(destination));
  destinationsRepo = new DestinationsRepo(destinations);
}

function getTotalCostByYear(event) {
  const chosenYear = event.target.value;
  const filterTripsByYear = tripsRepo.filterTripsByYear(chosenYear)
  const filterDestinations = destinationsRepo.filterDestinationsByIds(filterTripsByYear)
  const totalCost = tripsRepo.calculateTotalTripCostPerYear(filterDestinations, traveler.id)
  domUpdates.displayTotalCost(totalCostElement, totalCost)
}

function displayTrips() {
  displayPastTrips()
  displayPresntTrips()
  displayUpcomingTrips()
  displayPendingTrips()
  domUpdates.displayDestinationDropDown(destinationDropDownList, destinationNames)
}

function displayPastTrips() {
  const pastTrips = tripsRepo.filterTripsByYear('2019');
  const pastDestinations = destinationsRepo.filterDestinationsByIds(pastTrips);
  domUpdates.displaySelectedTrips(displayPastTripsElement, pastTrips, pastDestinations);
}

function displayPresntTrips() {
  const presentTrips = tripsRepo.filterTripsByYear('2020');
  const presentDestinations = destinationsRepo.filterDestinationsByIds(presentTrips);
  domUpdates.displaySelectedTrips(displayPresentTripsElement, presentTrips, presentDestinations);
}

function displayUpcomingTrips() {
  const upcomingTrips = tripsRepo.filterTripsByYear('2021');
  const upcomingDestinations = destinationsRepo.filterDestinationsByIds(upcomingTrips);
  domUpdates.displaySelectedTrips(displayUpcomingTripsElement, upcomingTrips, upcomingDestinations);
}

function displayPendingTrips() {
  const pendingTrips = tripsRepo.filterPendingTrips('2019');
  const pendingDestinations = destinationsRepo.filterDestinationsByIds(pendingTrips);
  domUpdates.displaySelectedTrips(displayPendingTripsElement, pendingTrips, pendingDestinations);
}




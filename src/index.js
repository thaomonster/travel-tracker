import './css/index.scss';
import Traveler from '../src/Traveler';
import Trip from './Trip';
import TripRepo from './TripRepo';
import Destination from './Destination';
import DestinationRepo from './DestinationRepo'
import apiCalls from '../src/apis'
import domUpdates from '../src/domUpdates'

let pastTrips = document.querySelector('.past-trip-js');
let totalCost = document.querySelector('.total-cost-js');


let traveler, trips, tripRepo, destinations, destinationRepo;

window.addEventListener('load', pageLoad)

Promise.all([apiCalls.getTravelerData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    let destArr = []
    let userTrips = data[1].trips.filter(trip => trip.userID === data[0].id)
    data[2].destinations.filter(destination => {
      userTrips.forEach(trip => {
        if (destination.id === trip.destinationID) {
          destArr.push(destination)
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
  })
  
function instantiateClasses(obj) {
  traveler = new Traveler(obj);
  trips = obj.trips.map(trip => new Trip(trip));
  tripRepo = new TripRepo(trips);
  destinations = obj.destinations.map(destination => new Destination(destination));
  destinationRepo = new DestinationRepo(destinations);
  console.log(tripRepo)
}

function pageLoad() {
  domUpdates.displayTotalCost(totalCost, destinations, 22, tripRepo)
}
import './css/index.scss';
import Traveler from '../src/Traveler';
import Trip from './Trip';
import TripsRepo from './TripsRepo';
import Destination from './Destination';
import DestinationsRepo from './DestinationsRepo';
import apiCalls from '../src/apis';
import domUpdates from '../src/domUpdates';

const displayPastTripsElement = document.querySelector('.past-trip-js');
const displayPresentTripsElement = document.querySelector('.present-trip-js');
const displayUpcomingTripsElement = document.querySelector('.upcoming-trip-js');
const displayPendingTripsElement = document.querySelector('.pending-trip-js');
const estimatedCostElement = document.querySelector('.estimated-cost');
const totalCostElement = document.querySelector('.total-cost-js');
const loginErrorMsg = document.querySelector('.login-error-msg')
const addNewTripModal = document.querySelector('.add-new-trip-modal-js');

const inputNumOfTravelers = document.querySelector('.number-of-travelers-js');
const startDate = document.querySelector('.calendar-start');
const endDate = document.querySelector('.calendar-end');
const destinationDropDownList = document.querySelector('.destination-drop-down');
const yearDropDown = document.querySelector('.year-drop-down-js');
const submitBtn = document.querySelector('.submit-btn-js');
const addNewTripBtn = document.querySelector('.add-trip-btn-js');
const modalExitBtn = document.querySelector('.exit-btn-js');
const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginBtn = document.querySelector('.login-btn-js');
const logoutBtn = document.querySelector('.logout-btn-js');

const mainPage = document.querySelector('.main');
const loginPage = document.querySelector('.login-form-js');

let traveler, trips, tripsRepo, destinations, destinationsRepo;
let newTrip = {status: "pending","suggestedActivities": []};

const destinationNames = [];

yearDropDown.addEventListener('change', getTotalCostByYear);
startDate.addEventListener('change', selectStartDate);
endDate.addEventListener('change', selectEndDate);
destinationDropDownList.addEventListener('change', selectDestination);

submitBtn.addEventListener('click', addNewTrip);
addNewTripBtn.addEventListener('click', openModal);
modalExitBtn.addEventListener('click', closeModal);
loginBtn.addEventListener('click', checkUsernameAndPassword);
logoutBtn.addEventListener('click', logOut);

Promise.all([apiCalls.getTravelerData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
.then(data => {
    let userTrips = data[1].trips.filter(trip => trip.userID === data[0].id)
    data[2].destinations.forEach(destination => {
        if (!destinationNames.includes(destination.destination)) {
          destinationNames.push(destination.destination)
        }
    })
   const travelObj = data.reduce((acc, current) => {
      acc = {
        id: data[0].id,
        name: data[0].name,
        travelerType: data[0].travelerType,
        trips: userTrips,
        destinations: data[2].destinations
      }
      return acc
    }, {})
    instantiateClasses(travelObj)
    displayTrips()
  });
  
function instantiateClasses(obj) {
  traveler = new Traveler(obj);
  trips = obj.trips.map(trip => new Trip(trip));
  tripsRepo = new TripsRepo(trips);
  destinations = obj.destinations.map(destination => new Destination(destination));
  destinationsRepo = new DestinationsRepo(destinations);
}

function getTotalCostByYear(event) {
  const chosenYear = event.target.value;
  const filterTripsByYear = tripsRepo.filterTripsByYear(chosenYear);
  const filterDestinations = destinationsRepo.filterDestinationsByIds(filterTripsByYear);
  const totalCost = tripsRepo.calculateTotalTripCostPerYear(filterDestinations, traveler.id);
  domUpdates.displayTotalCost(totalCostElement, totalCost);
}

function displayTrips() {
  displayPastTrips();
  displayPresntTrips();
  displayUpcomingTrips();
  displayPendingTrips();
  domUpdates.displayDestinationDropDown(destinationDropDownList, destinationNames);
}

function displayPastTrips() {
  const pastTrips = tripsRepo.filterTripsByYear('2019');
  const pastDestinations = destinationsRepo.filterDestinationsByIds(pastTrips);
  domUpdates.displaySelectedTrips(displayPastTripsElement, 'Past Trips', pastTrips, pastDestinations);
}

function displayPresntTrips() {
  const presentTrips = tripsRepo.filterTripsByYear('2020');
  const presentDestinations = destinationsRepo.filterDestinationsByIds(presentTrips);
  domUpdates.displaySelectedTrips(displayPresentTripsElement, 'Present Trips',presentTrips, presentDestinations);
}

function displayUpcomingTrips() {
  const upcomingTrips = tripsRepo.filterTripsByYear('2021');
  const upcomingDestinations = destinationsRepo.filterDestinationsByIds(upcomingTrips);
  domUpdates.displaySelectedTrips(displayUpcomingTripsElement, 'Upcoming Trips',upcomingTrips, upcomingDestinations);
}

function displayPendingTrips() {
  const pendingTrips = tripsRepo.filterPendingTrips('2019');
  const pendingDestinations = destinationsRepo.filterDestinationsByIds(pendingTrips);
  domUpdates.displaySelectedTrips(displayPendingTripsElement, 'Pending Trips',pendingTrips, pendingDestinations);
}

function selectStartDate(event) {
   newTrip.date = event.target.value.replaceAll('-', '/');
}

function selectEndDate(event) {
  const duration = returnDuration(newTrip.date, event.target.value.replaceAll('-', '/'));
   newTrip.duration = duration;
}

function returnDuration(date1, date2) {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

function selectDestination(event) {
  newTrip.travelers = parseInt(inputNumOfTravelers.value);
  const selectDestinationId = destinationsRepo.findDestionationIdByName(event.target.value);
  newTrip.destinationID = selectDestinationId
  const destinationDetails = destinationsRepo.destinations.find(dest => dest.id === selectDestinationId);
  const estimatedCost = (destinationDetails.estimatedLodgingCostPerDay * newTrip.duration) + (destinationDetails.estimatedFlightCostPerPerson * newTrip.travelers)
  const totalCost = Math.round(estimatedCost * 1.1);
  domUpdates.displayEstimatedCost(estimatedCostElement, totalCost);
}

function addNewTrip(event) {
  event.preventDefault();
  const userNewTrip = {...newTrip, id: Date.now(), userID: traveler.id, travelers: parseInt(inputNumOfTravelers.value)}
  apiCalls.addNewTrip(userNewTrip)
    .then(() => {
      tripsRepo.trips.push(userNewTrip);
      displayPendingTrips();
    });
  domUpdates.hideModal(addNewTripModal);
}

function openModal() {
  domUpdates.displayModal(addNewTripModal);
}

function closeModal() {
  domUpdates.hideModal(addNewTripModal);
}

function togglePages(pageOne, pageTwo, button) {
  pageOne.classList.toggle('hidden');
  pageTwo.classList.toggle('hidden');
  button.classList.toggle('hidden');
}

function checkUsernameAndPassword(event) {
  event.preventDefault()
  if (usernameInput.value === 'traveler22' && passwordInput.value === 'travel2020') {
    togglePages(loginPage, mainPage, logoutBtn);
  } else {
    domUpdates.displayLoginErrorMsg(loginErrorMsg)
  }
}
  
function logOut() {
  togglePages(loginPage, mainPage, logoutBtn);
}
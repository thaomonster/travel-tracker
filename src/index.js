// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
import Traveler from '../src/Traveler';
import Trip from '../src/Trips';
import TripsRepo from '../src/TripsRepo';
import Destination from '../src/Destinations';
import DestinationsRepo from '../src/DestinationsRepo'
import {getData} from '../src/apis'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

getData('travelers')
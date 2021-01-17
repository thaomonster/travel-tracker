import './css/index.scss';
import Traveler from '../src/Traveler';
import Trip from '../src/Trips';
import TripsRepo from '../src/TripsRepo';
import Destination from '../src/Destinations';
import DestinationsRepo from '../src/DestinationsRepo'
import {getData} from '../src/apis'
import domUpdates from '../src/domUpdates'

getData('travelers')
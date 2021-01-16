import { expect } from 'chai';
import Trip from '../src/Trip';
import sampleTripData from '../test/test-data/trip-data';

describe('Trip class', () => {
  let trip, trip1, trip2

  beforeEach(() => {
    trip = new Trip(sampleTripData);
    trip1 = new Trip(sampleTripData.trips[0]);
    trip2 = new Trip(sampleTripData.trips[1]);
  });

  it('should be an instance of a Traveler class', () => {
    expect(trip1).to.be.an.instanceOf(Trip)
  });

  

});

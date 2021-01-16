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

  it('should initialize with an id', () => {
    expect(trip2.id).to.eq(2)
  });

  it('should initialize with a userID', () => {
    expect(trip1.userID).to.eq(44)
  });

  
});

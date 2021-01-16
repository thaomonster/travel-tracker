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

  it('should have an id', () => {
    expect(trip2.id).to.eq(2)
  });

  it('should have a userID', () => {
    expect(trip1.userID).to.eq(44)
  });

  it('should have a destination id', () => {
    expect(trip2.destinationID).to.eq(25)
  });

  it('should have amount of travelers', () => {
    expect(trip1.travelers).to.eq(1)
  });

  

});

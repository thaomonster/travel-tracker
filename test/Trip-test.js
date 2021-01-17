import { expect } from 'chai';
import Trip from '../src/Trip';
import sampleTripData from '../test/test-data/trip-data';

describe('Trip class', () => {
  let trip, trip1;

  beforeEach(() => {
    trip = new Trip(sampleTripData.trips[0]);
    trip1 = new Trip(sampleTripData.trips[1]);
  })

  it('should be an instance of a Traveler class', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  })

  it('should have an id', () => {
    expect(trip1.id).to.eq(2);
  })

  it('should have a userID', () => {
    expect(trip.userID).to.eq(44);
  })

  it('should have a destination id', () => {
    expect(trip1.destinationID).to.eq(25);
  })

  it('should have amount of travelers', () => {
    expect(trip.travelers).to.eq(1);
  })

  it('should have a trip date', () => {
    expect(trip1.date).to.eq("2020/10/04");
  })

  it('should have a trip duration', () => {
    expect(trip.duration).to.eq(8);
  })

  it('should have trip status', () => {
    expect(trip1.status).to.eq("pending");
  })

  it('should have an array of suggested activities', () => {
    expect(trip.suggestedActivities).to.deep.eq([]);
  })

  it('should have start with an empty list', () => {
    expect(trip1.pastTrips).to.deep.eq([]);
    expect(trip1.presentTrips).to.deep.eq([]);
    expect(trip1.upcomingTrips).to.deep.eq([]);
    expect(trip1.pendingTrips).to.deep.eq([]);
  })

})

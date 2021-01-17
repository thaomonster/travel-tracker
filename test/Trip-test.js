import { expect } from 'chai';
import Trip from '../src/Trips';
import sampleTripData from '../test/test-data/trip-data';

describe('Trip class', () => {
  let trip1, trip2;

  beforeEach(() => {
    trip1 = new Trip(sampleTripData.trips[0]);
    trip2 = new Trip(sampleTripData.trips[1]);
  })

  it('should be an instance  of a Traveler class', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  })
  
  it('should have an id', () => {
    expect(trip2.id).to.eq(2);
  })
  
  it('should have a userID', () => {
    expect(trip1.userID).to.eq(44);
  })
  
  it('should have a destination id', () => {
    expect(trip2.destinationID).to.eq(25);
  })
  
  it('should have amount of travelers', () => {
    expect(trip1.travelers).to.eq(1);
  })
  
  it('should have a trip date', () => {
    expect(trip2.date).to.eq("2020/10/04");
  })
  
  it('should have a trip duration', () => {
    expect(trip1.duration).to.eq(8);
  })
  
  it('should have trip status', () => {
    expect(trip2.status).to.eq("pending");
  })
  
  it('should have an array of suggested activities', () => {
    expect(trip1.suggestedActivities).to.deep.eq([]);
  })
})


import { expect } from 'chai';
import Destination from '../src/Destination';
import destinationData from '../test/test-data/destination-data';

describe('Destination class', () => {
  let destination, destination1;

  beforeEach(() => {
    destination = new Destination(destinationData.destinations[0]);
    destination1 = new Destination(destinationData.destinations[1]);
  })

  it('should have an id', () => {
    expect(destination.id).to.eq(14);
  })

  it('should have a destination', () => {
    expect(destination1.destination).to.eq("Rome, Italy");
  })

  it('should have an estimated loadging cost per day', () => {
    expect(destination.estimatedLodgingCostPerDay).to.eq(70);
  })

  it('should have an estimated flight cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.eq(650);
  })

  it('should have an image', () => {
    expect(destination.image).to.eq("https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80");
  })

  it('should and an alt for the image', () => {
    expect(destination.alt).to.eq("people buying oranges and other fruit from a street vendor");
  })

})
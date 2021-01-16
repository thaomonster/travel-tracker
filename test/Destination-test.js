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
    expect(destination.id).to.eq(1);
  })

  it('should have a destination', () => {
    expect(destination1.destination).to.eq("Stockholm, Sweden");
  })

  it('should have an estimated loadging cost per day', () => {
    expect(destination.estimatedLodgingCostPerDay).to.eq(70);
  })

  it('should have an estimated flight cost per person', () => {
    expect(destination1.estimatedFlightCostPerPerson).to.eq(780);
  })

  it('should have an image', () => {
    expect(destination.image).to.eq("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
  })

  it('should and an alt for the image', () => {
    expect(destination.alt).to.eq("overview of city buildings with a clear sky");
  })

})
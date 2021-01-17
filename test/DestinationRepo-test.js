import { expect } from 'chai';
import Destination from '../src/Destinations';
import DestinationsRepo from '../src/DestinationsRepo'
import destinationData from '../test/test-data/destination-data';

describe('Destination Repo Class', () => {
  let destionation1, destionation2, destionation3, destinationsRepo;

  beforeEach(() => {
    destionation1 = new Destination(destinationData.destinations[0]);
    destionation2 = new Destination(destinationData.destinations[1]);
    destionation3 = new Destination(destinationData.destinations[2]);
    destinationsRepo = new DestinationsRepo([destionation1, destionation2, destionation3]);
  })

  it('should be an instance of DestinationsRepo', () => {
    expect(destinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  });
  
  it('should not have an empty array by default', () => {
    expect(destinationsRepo.destinations).to.deep.eq([
      {
        id: 14,
        destination: "Marrakesh, Morocco",
        estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 830,
        image: "https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
        alt: "people buying oranges and other fruit from a street vendor"
      },
      {
        id: 22,
        destination: "Rome, Italy",
        estimatedLodgingCostPerDay: 90,
        estimatedFlightCostPerPerson: 650,
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people standing inside a colosseum during the day"
      },
      {
        id: 25,
        destination: "New York, New York",
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "people crossing the street during the day surrounded by tall buildings and advertisements"
      },
    ]);
  });
})
import { expect } from 'chai';
import Destination from '../src/Destination';
import DestinationsRepo from '../src/DestinationsRepo'
import destinationData from './test-data/destination-data';
import Trip from '../src/Trip';
import sampleTripData from './test-data/trip-data';
import TripsRepo from '../src/TripsRepo';

describe('Destination Repo Class', () => {
  let destionation1, destionation2, destionation3, destinationsRepo, trip1, trip2, trip3, tripsRepo;

  beforeEach(() => {
    destionation1 = new Destination(destinationData.destinations[0]);
    destionation2 = new Destination(destinationData.destinations[1]);
    destionation3 = new Destination(destinationData.destinations[2]);
    destinationsRepo = new DestinationsRepo([destionation1, destionation2, destionation3]);

    trip1 = new Trip(sampleTripData.trips[0]);
    trip2 = new Trip(sampleTripData.trips[1]);
    trip3 = new Trip(sampleTripData.trips[2]);
    tripsRepo = new TripsRepo([trip1, trip2, trip3]);
  })

  it('should be an instance of DestinationsRepo', () => {
    expect(destinationsRepo).to.be.an.instanceOf(DestinationsRepo);
  })
  
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
    ])
  })

  describe('Methods', () => {
    it('should find destinations by ids', () => {
      destinationsRepo.filterDestinationsByIds(tripsRepo.trips)

      expect(destinationsRepo.filterDestinationsByIds(tripsRepo.trips)).to.deep.eq([
        {
          id: 25,
          destination: "New York, New York",
          estimatedLodgingCostPerDay: 175,
          estimatedFlightCostPerPerson: 200,
          image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          alt: "people crossing the street during the day surrounded by tall buildings and advertisements"
        },
        {
          id: 22,
          destination: "Rome, Italy",
          estimatedLodgingCostPerDay: 90,
          estimatedFlightCostPerPerson: 650,
          image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          alt: "people standing inside a colosseum during the day"
        },
      ])
    })

    it('should find destination ID by name', () => {
      destinationsRepo.findDestionationIdByName("New York, New York")

      expect(destinationsRepo.findDestionationIdByName("New York, New York")).to.eq(25)
    })
  })

})
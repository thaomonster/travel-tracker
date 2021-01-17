import { expect } from 'chai';
import Trip from '../src/Trip';
import TripRepo from '../src/TripRepo';
import sampleTripData from '../test/test-data/trip-data';

describe('TripRepo Class', () => {
  let trip1, trip2, trip3, tripRepo;
  
  beforeEach(() => {
    trip1 = new Trip(sampleTripData.trips[0]);
    trip2 = new Trip(sampleTripData.trips[1]);
    trip3 = new Trip(sampleTripData.trips[2]);
    tripRepo = new TripRepo([trip1, trip2, trip3]);
  })
  
  describe('Intitialize', () => {
    it('should be an instance of TripRepo', () => {
      expect(tripRepo).to.be.an.instanceOf(TripRepo);
    });
    
    it('should not have an empty array by default', () => {
      expect(tripRepo.trips).to.deep.eq([
        {
          "id": 1,
          "userID": 44,
          "destinationID": 49,
          "travelers": 1,
          "date": "2019/09/16",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
        },
        {
          "id": 2,
          "userID": 35,
          "destinationID": 25,
          "travelers": 5,
          "date": "2020/10/04",
          "duration": 18,
          "status": "pending",
          "suggestedActivities": []
        },
        {
          "id": 3,
          "userID": 3,
          "destinationID": 22,
          "travelers": 4,
          "date": "2020/05/22",
          "duration": 17,
          "status": "pending",
          "suggestedActivities": []
        },
      ]);
    });
  })

  describe('Method', () => {
    it('should filter trips by date', () => {
      tripRepo.filterTripsByYear('2019');

      expect(tripRepo.filterTripsByYear('2019')).to.deep.eq([
        {
          "id": 1,
          "userID": 44,
          "destinationID": 49,
          "travelers": 1,
          "date": "2019/09/16",
          "duration": 8,
          "status": "approved",
          "suggestedActivities": []
        },
      ]);
    });

    it('should calculate total trip cost', () => {
      const destinations = [
        {
          id: 49,
          destination: "Castries, St Lucia",
          estimatedLodgingCostPerDay: 650,
          estimatedFlightCostPerPerson: 90,
          image: "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
          alt: "aerial photography of rocky mountain under cloudy sky"
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
      ]
      tripRepo.calculateTotalTripCostPerYear(destinations, 44);
      
      expect(tripRepo.calculateTotalTripCostPerYear(destinations, 44)).to.eq(5819)
    })
  })

})
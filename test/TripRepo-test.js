import { expect } from 'chai';
import Trip from '../src/Trip';
import TripsRepo from '../src/TripsRepo';
import sampleTripData from '../test/test-data/trip-data';

describe('TripRepo Class', () => {
  let trip1, trip2, trip3, tripsRepo;
  
  beforeEach(() => {
    trip1 = new Trip(sampleTripData.trips[0]);
    trip2 = new Trip(sampleTripData.trips[1]);
    trip3 = new Trip(sampleTripData.trips[2]);
    tripsRepo = new TripsRepo([trip1, trip2, trip3]);
  })
  
  describe('Intitialize', () => {
    it('should be an instance of TripRepo', () => {
      expect(tripsRepo).to.be.an.instanceOf(TripsRepo);
    });
    
    it('should not have an empty array by default', () => {
      expect(tripsRepo.trips).to.deep.eq([
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
      tripsRepo.filterTripsByYear('2019');

      expect(tripsRepo.filterTripsByYear('2019')).to.deep.eq([
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

    
  })

})